import React, { useEffect, useRef } from 'react';

const Starfield = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current ? canvasRef.current : null;
        const ctx = canvas.getContext('2d');
        let animationFrameId: number;

        // Ajustar el canvas al tamaño de la pantalla
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = [];
        const numStars = 200; // Puedes subir o bajar este número para más o menos estrellas

        // Inicializar las estrellas con propiedades aleatorias
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                speed: Math.random() * 0.5 + 0.1,
                alpha: Math.random(),
                alphaChange: (Math.random() * 0.02) - 0.01,
            });
        }

        const draw = () => {
            // Limpiar el frame anterior
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Crear el fondo con degradado espacial (colores de Tailwind slate-900 a slate-950)
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width
            );
            gradient.addColorStop(0, 'rgba(15, 23, 42, 1)');
            gradient.addColorStop(1, 'rgba(2, 6, 23, 1)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Dibujar y animar cada estrella
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();

                // Movimiento hacia arriba
                star.y -= star.speed;

                // Efecto de parpadeo (twinkle)
                star.alpha += star.alphaChange;
                if (star.alpha <= 0.2 || star.alpha >= 1) {
                    star.alphaChange = -star.alphaChange;
                }

                // Si la estrella sale de la pantalla, reiniciar su posición abajo
                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        // Manejar el redimensionamiento de la ventana
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        // Limpiar eventos y animación cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            // Las clases de Tailwind lo fijan al fondo y evitan que bloquee clicks
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
};

export default Starfield;