export const querys = {
    getAllCuidadanos: "SELECT TOP(500) * FROM ciudadano",
    getCiudadanoById: "SELECT * FROM ciudadano Where id = @id",
    addNewCuidadano:
    "INSERT INTO ciudadano (documento, nombres, apellidos, fecha_nacimiento, profesion, aspiracion_salarial, correo_electronico, tipo_documento_id) VALUES (@documento, @nombres, @apellidos, @fecha_nacimiento, @profesion, @aspiracion_salarial, @correo_electronico, @tipo_documento_id)",
    deleteCuidadano: "DELETE FROM ciudadano WHERE id= @id",
    getTotalCiudadano: "SELECT COUNT(*) FROM BolsaEmpleoDB.dbo.ciudadano",
    updateCuidadanoById:
    "UPDATE ciudadano SET documento = @documento, nombres = @nombres, apellidos = @apellidos, fecha_nacimiento = @fecha_nacimiento, profesion = @profesion, aspiracion_salarial = @aspiracion_salarial, correo_electronico = @correo_electronico, tipo_documento_id = @tipo_documento_id WHERE id = @id",
    getCiudadanoByCorreoElectronico: "SELECT id FROM ciudadano WHERE correo_electronico= @correo_electronico",    
    getAllTipoDocumento: "SELECT TOP(500) * FROM tipo_documento"
};
