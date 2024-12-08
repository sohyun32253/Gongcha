import React, { useEffect, useRef, useState } from "react";
import '../Store.css';
import searchIcon from '../images/search_default_white.svg';

const KakaoMap = () => {
  const mapContainer = useRef(null); // 지도 DOM 참조
  const [keyword, setKeyword] = useState(""); // 검색 키워드
  const [places, setPlaces] = useState([]); // 검색 결과
  const [selectedCity, setSelectedCity] = useState(""); // 선택된 시/도
  const [selectedDistrict, setSelectedDistrict] = useState(""); // 선택된 시/군/구
  const markers = useRef([]); // 마커 저장
  const map = useRef(null); // 지도 객체 저장

  const regions = {
    서울: ["강남구", "강동구", "강북구", "관악구"],
    부산: ["해운대구", "수영구", "동래구"],
    대구: ["중구", "달서구", "수성구"],
  };

  // 모든 시/군/구 리스트 생성
  const allDistricts = Object.values(regions).flat();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=4058e52c48967d133b010f1e8dd392b1&libraries=services";
    script.async = true;
    script.onload = () => {
      const kakao = window.kakao;
      map.current = new kakao.maps.Map(mapContainer.current, {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 서울을 중심으로 설정
        level: 3, // 초기 줌 레벨
      });

      // 서울 공차 매장 자동 검색
      searchPlaces(); // 서울 공차 매장을 검색
    };
    document.head.appendChild(script);

    return () => {
      // 컴포넌트가 언마운트될 때 마커 제거
      markers.current.forEach((marker) => marker.setMap(null));
    };
  }, []); // 빈 배열로 한 번만 실행

  const searchPlaces = () => {
    // "공차"를 항상 검색 키워드에 포함
    const kakao = window.kakao;
    const ps = new kakao.maps.services.Places();

    const searchKeyword = `공차 ${selectedCity || ""} ${selectedDistrict || ""} ${keyword}`.trim();

    ps.keywordSearch(searchKeyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setPlaces(data); // 검색 결과 저장
        displayMarkers(data); // 마커 표시
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        setPlaces([]); // 검색 결과가 없으면 리스트를 비웁니다.
        alert("검색 결과가 없습니다.");
      } else {
        alert("검색 중 오류가 발생했습니다.");
      }
    });
  };

  const displayMarkers = (places) => {
    const kakao = window.kakao;

    // 기존 마커 제거
    markers.current.forEach(marker => marker.setMap(null));
    markers.current = [];
  
    const bounds = new kakao.maps.LatLngBounds();
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 }); // InfoWindow 생성
  
    places.forEach(place => {
      const position = new kakao.maps.LatLng(place.y, place.x);
      const marker = new kakao.maps.Marker({ position, map: map.current });
      markers.current.push(marker);
      bounds.extend(position);
      
      // 마커 클릭 이벤트 추가
      kakao.maps.event.addListener(marker, "click", () => {
        const content = `
          <div style="padding:10px; width:200px;">
            <strong>${place.place_name}</strong><hr>
            <p style="font-size:12px; color=#ffffff;"><span>주소: </span>${place.address_name}</p>
            <p style="font-size:12px;">${place.phone ? `<span>Tel: </span> Tel: ${place.phone}` : ""}</p>
          </div>
        `;
        infowindow.setContent(content); // InfoWindow 내용 설정
        infowindow.open(map.current, marker); // InfoWindow를 해당 마커 위에 표시
      });
    });
  
    // 지도 범위 설정
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
