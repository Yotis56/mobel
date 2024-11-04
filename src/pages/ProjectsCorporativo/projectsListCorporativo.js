const BASE_URL = 'https://mobel.com.co/assets/images/projectsCorporativo'

const projectsCorporativo = [
    {
        id: 1,
        name: 'ofisi',
        title: 'Inmobilaria ISI',
        folderName: 'OfIsi', 
        fileName: 'OfIsi',
        nubmerOfItems: 11, 
    },
    {
        id: 2,
        name: 'novaius',
        title: 'Novaius Consultores',
        folderName: 'OfNovaius', 
        fileName: 'ofNovaius',
        nubmerOfItems: 8, 
    },
    {
        id: 3,
        name: 'soulGreen',
        title: 'Soul Green Logistics',
        folderName: 'OfSoulGreen', 
        fileName: 'ofSoulGreen',
        nubmerOfItems: 6, 
    },
]

export const projectsListCorporativo =  Array.from(projectsCorporativo, (project) => {
    const emptyArray = []
    for (let i = 1; i < project.nubmerOfItems; i++) {
        emptyArray.push(`${BASE_URL}/${project.folderName}/${project.fileName}${i}.jpg`)
    }
    return {
        id: project.id, 
        title: project.title, 
        photos: emptyArray
    }
})
