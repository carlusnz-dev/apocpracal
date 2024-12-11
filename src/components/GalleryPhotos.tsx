import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const photos = [
     { src: "https://via.placeholder.com/500", width: 4, height: 4 },
     { src: "https://via.placeholder.com/500", width: 4, height: 4 },
     { src: "https://via.placeholder.com/500", width: 4, height: 4 },
     { src: "https://via.placeholder.com/500", width: 4, height: 4 },
]

function GalleryPhotos() {
     return (
          <RowsPhotoAlbum photos={photos} 
          />
     )
}

export default GalleryPhotos