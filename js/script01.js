@keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  h1, h2, h3, legend {
    animation: pulse 2s infinite; 
  }