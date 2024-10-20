import React, { useEffect, useRef, useState } from 'react';

function Store(){
const KakaoMap = () => {
    const mapContainer = useRef(null);
    const [markers, setMarkers] = useState([]);
    const [placesList, setPlacesList] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [map, setMap] = useState(null);
    const infowindow = useRef(new window.kakao.maps.InfoWindow({ zIndex: 1 }));

    useEffect(() => {
        const mapOption = {
            center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3,
        };
        const kakaoMap = new window.kakao.maps.Map(mapContainer.current, mapOption);
        setMap(kakaoMap);
    }, []);

    const searchPlaces = () => {
        if (!keyword.trim()) {
            alert('키워드를 입력해주세요!');
            return;
        }
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(keyword, placesSearchCB);
    };

    const placesSearchCB = (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
            displayPlaces(data);
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
            alert('검색 결과가 존재하지 않습니다.');
        } else if (status === window.kakao.maps.services.Status.ERROR) {
            alert('검색 결과 중 오류가 발생했습니다.');
        }
    };

    const displayPlaces = (places) => {
        const bounds = new window.kakao.maps.LatLngBounds();
        const newMarkers = [];

        places.forEach((place, index) => {
            const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
            const marker = addMarker(placePosition, index);
            newMarkers.push(marker);
            bounds.extend(placePosition);
        });

        setMarkers(newMarkers);
        setPlacesList(places);
        map.setBounds(bounds);
    };

    const addMarker = (position, idx) => {
        const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
        const imageSize = new window.kakao.maps.Size(36, 37);
        const imgOptions = {
            spriteSize: new window.kakao.maps.Size(36, 691),
            spriteOrigin: new window.kakao.maps.Point(0, (idx * 46) + 10),
            offset: new window.kakao.maps.Point(13, 37),
        };
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
        const marker = new window.kakao.maps.Marker({
            position,
            image: markerImage,
        });

        marker.setMap(map);
        marker.addListener('mouseover', () => displayInfowindow(marker, placesList[idx].place_name));
        marker.addListener('mouseout', () => infowindow.current.close());

        return marker;
    };

    const displayInfowindow = (marker, title) => {
        const content = `<div style="padding:5px;z-index:1;">${title}</div>`;
        infowindow.current.setContent(content);
        infowindow.current.open(map, marker);
    };

    const removeMarkers = () => {
        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);
    };

    const handleKeywordChange = (e) => setKeyword(e.target.value);

    return (
        <div>
            <input
                type="text"
                id="keyword"
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="Search places..."
            />
            <button onClick={searchPlaces}>Search</button>
            <div id="map" style={{ width: '100%', height: '400px' }} ref={mapContainer} />
            <ul id="placesList">
                {placesList.map((place, index) => (
                    <li key={index}>
                        <span className={`markerbg marker_${index + 1}`}></span>
                        <div className="info">
                            <h5>{place.place_name}</h5>
                            {place.road_address_name ? (
                                <>
                                    <span>{place.road_address_name}</span>
                                    <span className="jibun gray">{place.address_name}</span>
                                </>
                            ) : (
                                <span>{place.address_name}</span>
                            )}
                            <span className="tel">{place.phone}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
}

export default Store;
