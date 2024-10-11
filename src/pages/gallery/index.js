import 'bootstrap/dist/css/bootstrap.min.css';

export default function Gallery() {
    const images = [
        '/gallery/bat.jpeg',
        '/gallery/cuteZombie.jpeg',
        '/gallery/wickedWitch.jpeg',
        '/gallery/spookyGhost.jpeg',
        '/gallery/trickOrTreat.jpeg',
        '/gallery/goofyJackOLantern.jpeg',
      ];
    
      return (
        <div>
            <h1 className="display-3 text-warning text-center">Halloween Gallery</h1>
            <div className="container">
            <div className="row row-cols-md-3 g-4">
                {images.map((image, index) => (
                <div className="col" key={index}>
                    <img src={image} className="img-fluid rounded-3" alt={`Image ${index + 1}`} />
                </div>
                ))}
            </div>
            </div>
        </div>
      );
    }
