export const querys = {
    getAllCuidadanos: "SELECT TOP(500) * FROM ciudadano",
    getCiudadanoById: "SELECT * FROM ciudadano WHERE id = @id",
    addNewCuidadano:
    "INSERT INTO ciudadano (documento, nombres, apellidos, fecha_nacimiento, profesion, aspiracion_salarial, correo_electronico, tipo_documento_id) VALUES (@documento, @nombres, @apellidos, @fecha_nacimiento, @profesion, @aspiracion_salarial, @correo_electronico, @tipo_documento_id)",
    deleteCuidadano: "DELETE FROM ciudadano WHERE id= @id",
    getTotalCiudadano: "SELECT COUNT(*) FROM BolsaEmpleoDB.dbo.ciudadano",
    updateCuidadanoById:
    "UPDATE ciudadano SET documento = @documento, nombres = @nombres, apellidos = @apellidos, fecha_nacimiento = @fecha_nacimiento, profesion = @profesion, aspiracion_salarial = @aspiracion_salarial, correo_electronico = @correo_electronico, tipo_documento_id = @tipo_documento_id WHERE id = @id",
    getCiudadanoByCorreoElectronico: "SELECT id FROM ciudadano WHERE correo_electronico= @correo_electronico",    

    // query tipo documento
    getAllTipoDocumento: "SELECT TOP(500) * FROM tipo_documento",

    // querys vacantes
    getVacanteById : "SELECT * FROM vacantes WHERE id = @id",
    getPostulacionByIdCiudadanoYByIdVacante : "SELECT * FROM ciudadano_vacante WHERE ciudadano_id = @ciudadano_id AND vacante_id = @vacante_id",
    updateDisponibilidadVacante : "UPDATE vacantes SET disponible = @disponible WHERE id = @id", 
    addNewPostulacion : "INSERT INTO ciudadano_vacante (ciudadano_id, vacante_id) VALUES (@ciudadano_id, @vacante_id)",
    getAllVacantes: "SELECT TOP(500) * FROM vacantes",
};
