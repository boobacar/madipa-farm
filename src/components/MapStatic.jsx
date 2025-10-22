export default function MapStatic(){
  return (
    <img
      src="https://staticmap.openstreetmap.de/staticmap.php?center=Dakar,S%C3%A9n%C3%A9gal&zoom=11&size=800x400&maptype=mapnik&markers=14.7167,-17.4677,lightblue1"
      alt="Localisation Dakar (illustration)"
      className="rounded-2xl shadow-soft w-full"
      loading="lazy"
      onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src='/images/map-dakar-fallback.svg' }}
    />
  )
}
