const Map = () => {
    return (
        <div className="bg-map-background text-center relative">
            <div>
                <img className="w-full" src="assets/map.png" alt="map_image_1"/>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <p className="text-4xl sm:text-6xl font-bold">11,658,467</p>
                <p className="text-2xl sm:text-3xl font-bold pt-2 sm:pt-4">Shoes Collected</p>
            </div>
        </div>
    )
} 

export default Map;