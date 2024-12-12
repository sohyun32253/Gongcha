import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Store.css";
import searchIcon from "../images/search_default_white.svg";


const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const KakaoMap = () => {
  const mapContainer = useRef(null);
  const [keyword, setKeyword] = useState("");
  const [places, setPlaces] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const markers = useRef([]);
  const map = useRef(null);

  const location = useLocation();
  const [isMapReady, setIsMapReady] = useState(false);

  const regions = {
    서울: ["강남구", "강동구", "강북구", "관악구"],
    부산: ["해운대구", "수영구", "동래구"],
    대구: ["중구", "달서구", "수성구"],
  };

  const allDistricts = Object.values(regions).flat();
  const debouncedKeyword = useDebounce(keyword, 500);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=4058e52c48967d133b010f1e8dd392b1&libraries=services";
    script.async = true;
    script.onload = () => {
      const kakao = window.kakao;
      map.current = new kakao.maps.Map(mapContainer.current, {
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
      });
      setIsMapReady(true);
    };
    document.head.appendChild(script);

    return () => {
      markers.current.forEach((marker) => marker.setMap(null));
    };
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const mainkeyword = query.get("keyword");

    if (mainkeyword) {
      setKeyword(mainkeyword);
      searchPlaces(mainkeyword);
    }
  }, [location.search]);

  useEffect(() => {
    if (isMapReady && !keyword.trim()) {
      const defaultKeyword = "공차";
      setKeyword(defaultKeyword);
      searchPlaces(defaultKeyword);
    }
  }, [isMapReady]);

  useEffect(() => {
    if (debouncedKeyword.trim()) {
      searchPlaces(debouncedKeyword);
    }
  }, [debouncedKeyword, selectedCity, selectedDistrict]);

  const searchPlaces = (searchKeyword = "") => {
    if (!map.current) return;

    const kakao = window.kakao;
    const ps = new kakao.maps.services.Places();

    // `공차` 키워드 자동 추가
    const finalKeyword = `공차 ${searchKeyword || selectedCity || selectedDistrict || debouncedKeyword}`.trim();
    if (!finalKeyword) return;

    markers.current.forEach((marker) => marker.setMap(null));
    markers.current = [];

    ps.keywordSearch(finalKeyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setPlaces(data);
        displayMarkers(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        setPlaces([]);
        alert("검색 결과가 없습니다.");
      } else {
        alert("검색 중 오류가 발생했습니다.");
      }
    });
  };

  const displayMarkers = (places) => {
    const kakao = window.kakao;
    const bounds = new kakao.maps.LatLngBounds();
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    places.forEach((place) => {
      const position = new kakao.maps.LatLng(place.y, place.x);
      const marker = new kakao.maps.Marker({ position, map: map.current });
      markers.current.push(marker);
      bounds.extend(position);

      kakao.maps.event.addListener(marker, "click", () => {
        const content = `
          <div style="padding:10px; width:200px;">
            <strong>${place.place_name}</strong><hr>
            <p>주소: ${place.address_name}</p>
            ${place.phone ? `<p>Tel: ${place.phone}</p>` : ""}
          </div>
        `;
        infowindow.setContent(content);
        infowindow.open(map.current, marker);
      });
    });

    map.current.setBounds(bounds);
  };

  const onSearch = (e) => {
    e.preventDefault();
    searchPlaces();
  };

  return (
    <main className="place">
      <div className='place_banner_wrap'>
              <div className='place_banner'>
                <div className='place_banner_cont'>
                  <h2>store</h2>
                  <p>공차의 매장을 쉽고 빠르게 찾아보세요.</p>
                </div>
              </div>
          </div>
    <div className="map_wrap">
      <div className="map_wrap_cont">
        <div
          className="map_container"
          ref={mapContainer}
          style={{
            width: "70%",
            height: "620px",
            position: "relative",
            overflow: "hidden",
          }}
        ></div>

<div id="menu_wrap" className="bg_white">
          <form onSubmit={onSearch}>
            <div>
              {/* 시/도 선택 */}
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedDistrict(""); // 시/군/구 초기화
                }}
              >
                <option value="">시/도 선택</option>
                {Object.keys(regions).map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              {/* 시/군/구 선택 */}
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                <option value="">구/군 선택</option>
                {selectedCity
                  ? regions[selectedCity].map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))
                  : allDistricts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
              </select>

              {/* 검색어 입력 */}
              <div className="search_field"> 
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                size="15"
                placeholder="검색어를 입력하세요."
              />

              <button type="submit">
                <img src={searchIcon} alt="검색하기" />
              </button>
              </div>
            </div>
          </form>

          <ul id="placesList">
            {places.map((place, index) => (
              <li key={index}>
                <strong>{place.place_name}</strong>
                {place.road_address_name && <p>{place.road_address_name}</p>}
                <p>{place.address_name}</p>
                {place.phone && <p>{place.phone}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </main>
  );
}

export default KakaoMap;
