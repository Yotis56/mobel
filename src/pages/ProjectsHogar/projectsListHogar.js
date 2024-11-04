const BASE_URL = 'https://mobel.com.co/assets/images/projectsHogar'

const projectsHogar = [
    {
        id: 1,
        name: 'aptoChico',
        title: 'Apto Chicó',
        folderName: 'aptoChico', 
        fileName: 'chico',
        nubmerOfItems: 5, 
    },
]

export const projectsListHogar =  Array.from(projectsHogar, (project) => {
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
