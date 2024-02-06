import React from 'react';
import Wavify from 'react-wavify';
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ position: 'relative', color: '#fff', textAlign: 'center' }}>
      <Wavify fill="#1976d2" paused={false} options={{ height: 20, amplitude: 20, speed: 0.15, points: 4 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1976d2" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </Wavify>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
        <Typography variant="body1" component="p">
          © {new Date().getFullYear()} Metaphoto - All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
