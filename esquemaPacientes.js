db.createCollection("pacientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre","apellidos","fechaNac","direccion"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Debe ser un string y es campo obligatorio"
                },
                apellidos: {
                    bsonType: "string",
                    description: "Debe ser un string y es campo obligatorio"
                },
                fechaNac: {
                    bsonType: "date",
                    description: "Debe ser un date y es campo obligatorio"
                },
                direccion: {
                    bsonType: "object",
                    required: ["calle","localidad"],
                    properties: {
                        calle: {
                            bsonType: "string",
                            description: "Debe ser un string y es campo obligatorio"
                        },
                        localidad: {
                            bsonType: "string",
                            description: "Debe ser un string y es campo obligatorio"
                        },
                        cp: {
                            bsonType: "int",
                            description: "Debe ser number"
                        }
                    }
                },
                dni: {
                    bsonType: "string",
                    description: "Debe ser un string"
                }
            }
        }
    }
}) 