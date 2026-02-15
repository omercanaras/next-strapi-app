// components/sections/AboutSection.tsx

export function AboutSection() {
    return (
      <section className="min-h-screen flex items-center justify-center py-24 px-[8vw] md:px-[12vw] bg-black">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left - Photo */}
          <div className="w-full max-w-[380px] lg:max-w-[420px] flex-shrink-0">
            <div 
              className="relative overflow-hidden rounded-[10px]"
              style={{
                WebkitMaskImage: '-webkit-radial-gradient(white, black)'
              }}
            >
              <img 
                src="/your-photo.jpg" 
                alt="Ömercan Aras"
                className="w-full h-auto block"
                style={{
                  objectPosition: '50% 50%',
                  objectFit: 'cover',
                  aspectRatio: '4/5'
                }}
              />
            </div>
          </div>
  
          {/* Right - Name and Description */}
          <div className="w-full lg:w-auto max-w-md">
            <div className="space-y-5">
              {/* Name */}
              <h2 
                className="text-2xl md:text-[1.5rem] text-white uppercase"
                style={{
                  fontFamily: '"Archivo Black", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2em'
                }}
              >
                Ömercan Aras
              </h2>
  
              {/* Title */}
              <h3 
                className="text-[0.7rem] md:text-[0.75rem] text-white uppercase font-bold"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  letterSpacing: '0em',
                  lineHeight: '1.3em'
                }}
              >
                fullstack engineer and software architect.
              </h3>
  
              {/* Description */}
              <p 
                className="text-[1rem] md:text-[1.1rem] text-gray-500 max-w-sm pt-4"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 300,
                  letterSpacing: '0em',
                  lineHeight: '1.6'
                }}
              >
                Building enterprise systems with Spring Boot, Angular, BPM and distributed architectures.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }