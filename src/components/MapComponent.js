import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';


//react-simple-maps tamamen SVG tabanlıdır

//ComposableMap — Haritanın tuvali Haritanın kapsayıcı container’ıdır. Haritayı çizecek SVG tuvalini oluşturur.

// Geography tek bir coğrafi parçayı (geo) çizer. Örneğin, Türkiye bir Geography, Almanya başka bir Geography olur. Her Geography bir path elementidir (<path> SVG’de).

//projection = içinde ki "geoMercator" → Haritanın projeksiyon tipi. Küreyi düz düzleme Mercator yöntemiyle açar. D3-Geo içinde geoMercator() diye bir hazır fonksiyon vardır. react-simple-maps bunu string olarak alıp D3 içindeki fonksiyonu çağırır.

// <Geographies> içerisinde ki "geographies" kalmak zorunda kütüphane props’ta bu isimle döndürüyor. Yani destructuring olduğu için şu nesneyi döndürür { geographies: [...] } ,

//map yaparken "".rsmKey" = her ülkenin benzersiz numarası , dosyadaki orijinal key olduğu için ŞART,react-simple-maps’a özel bir property.


const geoUrl = "/world-110m.json";
// Geographies GeoJSON veya TopoJSON gibi bir veri kaynağını okur. /world-110m.json içinde dünya ülkeleri geometrisi var. Bir liste üretir, her ülke bir Geography bileşenidir.


const MapComponent = () => (
    <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 100 }}
    >
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
                geographies.map((eachcountry) => (
                    <Geography
                        key={eachcountry.rsmKey}
                        geography={eachcountry}
                        fill="#374151"
                        stroke="#FFFFFF"
                        strokeWidth={1.2}
                    />
                ))
            }
        </Geographies>
    </ComposableMap>
);

// Kart görünümünde haritayı gösteren component
const GeoMapCard = () => (
    <div className="bg-gray-800 p-6 rounded-lg shadow h-[400px] overflow-hidden">
        <h3 className="text-lg font-semibold mb-4">GeoIP Map</h3>
        <MapComponent />
    </div>
);

export default GeoMapCard;
