import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

interface GalleryPhotosProps {
     photos: string[];
}

const GalleryPhotos: React.FC<GalleryPhotosProps> = ({ photos }) => {
     const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

     return (
          <>
               {/* Photo album grid */}
               <RowsPhotoAlbum
                    photos={photos.map((photo) => ({ src: photo, width: 4, height: 3 }))}
                    onClick={({ photo }) => setSelectedPhoto(photo.src)}
               />

               {/* Modal for enlarged photo */}
               {selectedPhoto && (
                    <Modal show onHide={() => setSelectedPhoto(null)} centered>
                         <Modal.Body className="p-3">
                              <img
                                   src={selectedPhoto}
                                   alt="Foto ampliada"
                                   className="img-fluid w-100 rounded-3 shadow"
                              />
                         </Modal.Body>
                         {/* Close button */}
                         <Modal.Footer>
                              <button
                                   className="btn btn-primary"
                                   onClick={() => setSelectedPhoto(null)}
                              >
                                   Fechar
                              </button>
                         </Modal.Footer>
                    </Modal>
               )}
          </>
     );
};

export default GalleryPhotos;