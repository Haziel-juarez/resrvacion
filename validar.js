import { supabase } from './supabase.js'

function mostrarPaso(paso) {
    document.getElementById("paso1").style.display = paso == 1 ? "block" : "none";
    document.getElementById("paso2").style.display = paso == 2 ? "block" : "none";
    document.getElementById("paso3").style.display = paso == 3 ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("guardarBtn").addEventListener("click", async () => {
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const pais = document.getElementById("pais").value;
        const telefono = document.getElementById("telefono").value;
        const fecha_inicio = document.getElementById("fecha_inicio").value;
        const fecha_fin = document.getElementById("fecha_fin").value;
        const personas = document.getElementById("personas").value;
        const dia1 = document.getElementById("dia1").value;
        const dia2 = document.getElementById("dia2").value;
        const dia3 = document.getElementById("dia3").value;
        const hospedaje = document.getElementById("hospedaje").value;

        // Validación básica
        if (!nombre || !correo || !pais || !telefono || !fecha_inicio || !fecha_fin || !personas) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            const { data, error } = await supabase.from("reservaciones").insert([
                {
                    nombre,
                    correo,
                    pais,
                    telefono,
                    fecha_inicio,
                    fecha_fin,
                    personas: parseInt(personas),
                    dia1,
                    dia2,
                    dia3,
                    hospedaje
                }
            ])

            if (error) {
                console.error("Error al guardar la reservación:", error);
                alert("Hubo un error al guardar la información.");
            } else {
                alert("¡Reservación guardada con éxito! 🎉");
            }

        } catch (err) {
            console.error("Error inesperado:", err);
            alert("Hubo un error inesperado al guardar.");
        }
    });
});
