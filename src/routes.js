const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage'
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h)=> {
            return 'Halaman tidak ditemukan'
        }
    }
]

module.exports = routes