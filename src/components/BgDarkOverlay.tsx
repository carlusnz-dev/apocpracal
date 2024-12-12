import { CSSProperties } from 'react';

const stylesOverlay: { bgDarkOverlay: CSSProperties } = {
     bgDarkOverlay: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
          zIndex: 1
     }
}

export default function BGDarkOverlay(style: CSSProperties) {
     return (
          <div style={{ ...stylesOverlay.bgDarkOverlay, ...style }}></div>
     )
}