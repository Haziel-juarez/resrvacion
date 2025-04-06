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
    const personas = parseInt(document.getElementById("personas").value);

    const dia1 = document.getElementById("dia1").value;
    const dia2 = document.getElementById("dia2").value;
    const dia3 = document.getElementById("dia3").value;

    const hospedaje = document.getElementById("hospedaje").value;

    if (!nombre || !correo || !pais || !telefono || !fecha_inicio || !fecha_fin || !personas || !hospedaje) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    try {
      // 1️⃣ Guardar en tabla "usuario"
      const { data: usuarioData, error: usuarioError } = await supabase
        .from("usuario")
        .insert([{ nombre, correo, pais, telefono }])
        .select();

      if (usuarioError) throw usuarioError;

      const usuario_id = usuarioData[0].id; // <- asumimos que la tabla tiene una columna 'id'

      // 2️⃣ Guardar en tabla "itinerario"
      const { error: itinerarioError } = await supabase
        .from("intinerario")
        .insert([{
          usuario_id,
          fecha_inicio,
          fecha_fin,
          personas,
          dia1,
          dia2,
          dia3
        }]);

      if (itinerarioError) throw itinerarioError;

      // 3️⃣ Guardar en tabla "alojamiento"
      const { error: alojamientoError } = await supabase
        .from("alojamiento")
        .insert([{
          usuario_id,
          hospedaje
        }]);

      if (alojamientoError) throw alojamientoError;

      alert("¡Reservación guardada exitosamente! 🎉");

    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Ocurrió un error al guardar la información.");
    }

    });
});
