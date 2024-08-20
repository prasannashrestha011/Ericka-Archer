interface sourceCodeType{
    title:string,
    snippetImg:string,
    description:string,
}
const sourceCodeData:sourceCodeType[]=[
    {
        title:'Aim Camera',
        snippetImg:'https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/Snap%20(2).png',
        description:`This code toggles between a main camera and an aim camera using a mouse left-click. 
       It utilizes Cinemachine for smoother transitions and camera controls, enhancing the user experience by providing seamless camera switching`,
    }
]
export {sourceCodeData}
export type {sourceCodeType}