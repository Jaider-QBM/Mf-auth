export const users = [
    {
        id: 1,
        uuid: '123e4567-e89b-12d3-a456-426655440000',
        firstname: 'John',
        lastname: 'Doe',
        email: 'TqXvZ@example.com',
        password: '1234567890',
        phone_number: '1234567890',
        create_at: '2022-01-01T00:00:00.000Z',
        photo: '',
        document_number: '1234567890',
        roles: [{
            id: 2, // ID del rol de Entrenador
            uuid: '123e4567-e89b-12d3-a456-426655440002',
            name: 'Entrenador',
            description: 'Entrenador'
        }],
        venues: [
            {
                id: 2, // ID del venue CHICO
                name: "CHICO",
                is_main: 0,
                city_id: 1,
                city_name: "Bogotá",
                country_id: 1,
                country_name: "Colombia",
                category_id: 1
            },
            {
                id: 127, // ID del venue SANTA ANA
                name: "SANTA ANA",
                is_main: 0,
                city_id: 1,
                city_name: "Bogotá",
                country_id: 1,
                country_name: "Colombia",
                category_id: 3
            },
            {
                id: 105, // ID del venue ANTARES
                name: "ANTARES",
                is_main: 0,
                city_id: 3,
                city_name: "Soacha",
                country_id: 1,
                country_name: "Colombia",
                category_id: 6
            },
            {
                id: 117, // ID del venue TERREROS
                name: "TERREROS",
                is_main: 0,
                city_id: 3,
                city_name: "Soacha",
                country_id: 1,
                country_name: "Colombia",
                category_id: 6
            },
            {
                id: 37, // ID del venue PORTAL 80
                name: "PORTAL 80",
                is_main: 0,
                city_id: 1,
                city_name: "Bogotá",
                country_id: 1,
                country_name: "Colombia",
                category_id: 5
            }
        ],
        permissions: [
            {
                id: 1, // ID del permiso Afiliados
                name: 'Afiliados',
                description: 'Afiliados',
                actions: ['read']
            },
            {
                id: 2, // ID del permiso Mis Afiliados
                name: 'Mis Afiliados',
                description: 'Mis Afiliados',
                actions: ['read']
            },
            {
                id: 3, // ID del permiso Entrenamientos
                name: 'Entrenamientos',
                description: 'Entrenamientos',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            }
        ]
    },
    {
        id: 2,
        uuid: '123e4567-e89b-12d3-a456-426655440001',
        firstname: 'Jane',
        lastname: 'Smith',
        email: '8BhZD@example.com',
        password: '12345',
        phone_number: '1234567890',
        create_at: '2022-01-01T00:00:00.000Z',
        photo: '',
        document_number: '1234567890',
        roles: [{
            id: 3, // ID del rol Administrador Comercial
            uuid: '123e4567-e89b-12d3-a456-426655440003',
            name: 'Administrador Comercial',
            description: 'Administrador Comercial'
        }],
        venues: [
            {
                id: 2, // ID del venue CHICO
                name: "CHICO",
                is_main: 0,
                city_id: 1,
                city_name: "Bogotá",
                country_id: 1,
                country_name: "Colombia",
                category_id: 1
            },
            {
                id: 92, // ID del venue VIVA VILLAVICENCIO
                name: "VIVA VILLAVICENCIO",
                is_main: 0,
                city_id: 4,
                city_name: "Villavicencio",
                country_id: 1,
                country_name: "Colombia",
                category_id: 5
            },
            {
                id: 43, // ID del venue LLANOCENTRO
                name: "LLANOCENTRO",
                is_main: 0,
                city_id: 4,
                city_name: "Villavicencio",
                country_id: 1,
                country_name: "Colombia",
                category_id: 2
            },
            {
                id: 115, // ID del venue PLAZA BOSA
                name: "PLAZA BOSA",
                is_main: 0,
                city_id: 1,
                city_name: "Bogotá",
                country_id: 1,
                country_name: "Colombia",
                category_id: 6
            },
            {
                id: 99, // ID del venue TITAN PLAZA
                name: "TITAN PLAZA",
                is_main: 0,
                city_id: 1,
                city_name: "Bogotá",
                country_id: 1,
                country_name: "Colombia",
                category_id: 4
            },
            {
                id: 4, // ID del venue HACIENDA SANTA BARBARA
                name: "HACIENDA SANTA BARBARA",
                is_main: 0,
                city_id: 1,
                city_name: "Bogotá",
                country_id: 1,
                country_name: "Colombia",
                category_id: 2
            },
            {
                id: 37, // ID del venue PORTAL 80
                name: "PORTAL 80",
                is_main: 0,
                city_id: 1,
                city_name: "Bogotá",
                country_id: 1,
                country_name: "Colombia",
                category_id: 5
            },
            {
                id: 105, // ID del venue ANTARES
                name: "ANTARES",
                is_main: 0,
                city_id: 3,
                city_name: "Soacha",
                country_id: 1,
                country_name: "Colombia",
                category_id: 6
            },
            {
                id: 145, // ID del venue ITAGUI
                name: "ITAGUI",
                is_main: 0,
                city_id: 2,
                city_name: "Medellín",
                country_id: 1,
                country_name: "Colombia",
                category_id: 12
            },
            {
                id: 156, // ID del venue CENTRAL BODYTECH
                name: "CENTRAL BODYTECH",
                is_main: 0,
                city_id: 1,
                city_name: "Bogotá",
                country_id: 1,
                country_name: "Colombia",
                category_id: 1
            }
        ],
        permissions: [
            {
                id: 4, // ID del permiso Comisiones
                uuid: '123e4567-e89b-12d3-a456-426655440002',
                name: 'Comisiones',
                description: 'Comisiones',
                actions: ['read']
            },
            {
                id: 5, // ID del permiso Contratos no firmados
                uuid: '123e4567-e89b-12d3-a456-426655440003',
                name: 'Contratos no firmados',
                description: 'Contratos no firmados',
                actions: ['read']
            },
            {
                id: 6, // ID del permiso Metodos de Pago no Validos
                uuid: '123e4567-e89b-12d3-a456-426655440004',
                name: 'Metodos de pago no Validos',
                description: 'Metodos de pago no Validos',
                actions: ['read']
            },
            {
                id: 7, // ID del permiso Afiliados
                uuid: '123e4567-e89b-12d3-a456-426655440005',
                name: 'Afiliados',
                description: 'Afiliados',
                actions: ['read']
            },
            {
                id: 8, // ID del permiso Clientes
                uuid: '123e4567-e89b-12d3-a456-426655440006',
                name: 'Clientes',
                description: 'Clientes',
                actions: ['read']
            },
            {
                id: 9, // ID del permiso Prospectos
                uuid: '123e4567-e89b-12d3-a456-426655440007',
                name: 'Prospectos',
                description: 'Prospectos',
                actions: ['read']
            },
            {
                id: 10, // ID del permiso Blacklist
                uuid: '123e4567-e89b-12d3-a456-426655440008',
                name: 'Blacklist',
                description: 'Blacklist',
                actions: ['read']
            },
            {
                id: 11, // ID del permiso Blacklist Informacion
                uuid: '123e4567-e89b-12d3-a456-426655440009',
                name: 'Blacklist Informacion',
                description: 'Blacklist Informacion',
                actions: ['read']
            },
            {
                id: 12, // ID del permiso Lista de espera Tokenizaciones
                uuid: '123e4567-e89b-12d3-a456-426655440010',
                name: 'Lista de espera Tokenizaciones',
                description: 'Lista de espera Tokenizaciones',
                actions: ['read']
            },
            {
                id: 13, // ID del permiso Productos
                uuid: '123e4567-e89b-12d3-a456-426655440011',
                name: 'Productos',
                description: 'Productos',
                actions: ['read']
            },
            {
                id: 14, // ID del permiso Ruleta
                uuid: '123e4567-e89b-12d3-a456-426655440012',
                name: 'Ruleta',
                description: 'Ruleta',
                actions: ['read']
            },
            {
                id: 15, // ID del permiso Espacios
                uuid: '123e4567-e89b-12d3-a456-426655440013',
                name: 'Espacios',
                description: 'Espacios',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            },
            {
                id: 16, // ID del permiso Agenda General
                uuid: '123e4567-e89b-12d3-a456-426655440014',
                name: 'Agenda General',
                description: 'Agenda General',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            },
            {
                id: 17, // ID del permiso Actividades
                uuid: '123e4567-e89b-12d3-a456-426655440015',
                name: 'Actividades',
                description: 'Actividades',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            },
            {
                id: 18, // ID del permiso Cotizaciones
                uuid: '123e4567-e89b-12d3-a456-426655440016',
                name: 'Cotizaciones',
                description: 'Cotizaciones',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            },
            {
                id: 19, // ID del permiso Facturación
                uuid: '123e4567-e89b-12d3-a456-426655440017',
                name: 'Facturación',
                description: 'Facturación',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            },
            {
                id: 20, // ID del permiso Promociones
                uuid: '123e4567-e89b-12d3-a456-426655440018',
                name: 'Promociones',
                description: 'Promociones',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            },
            {
                id: 21, // ID del permiso Link de pago
                uuid: '123e4567-e89b-12d3-a456-426655440019',
                name: 'Link de pago',
                description: 'Link de pago',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            },
            {
                id: 22, // ID del permiso Carterización
                uuid: '123e4567-e89b-12d3-a456-426655440020',
                name: 'Carterización',
                description: 'Carterización',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            },
            {
                id: 23, // ID del permiso Lista de referidos no aplicados
                uuid: '123e4567-e89b-12d3-a456-426655440021',
                name: 'Lista de referidos no aplicados',
                description: 'Lista de referidos no aplicados',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            },
            {
                id: 24, // ID del permiso Flujo
                uuid: '123e4567-e89b-12d3-a456-426655440022',
                name: 'Flujo',
                description: 'Flujo',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            },
            {
                id: 25, // ID del permiso Cupones
                uuid: '123e4567-e89b-12d3-a456-426655440023',
                name: 'Cupones',
                description: 'Cupones',
                actions: ['Programas', 'Sesiones', 'Ejercicios']
            }
        ]
    }
]