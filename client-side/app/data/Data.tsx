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
    },
    {
        title:'Scene Change',
        snippetImg:'https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/ray-so-export.png',
        description:'',
    },
    {
        title:'Switch Character Animation',
        snippetImg:'https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/ray-so-export%20(2).png',
        description:'Change the character state i.e idle to gun state',
    },{
        title:'Third Person Shooter',
        snippetImg:'https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/ThirdPersonShooter.cs.png',
        description:"This script is responsible for managing the third-person shooter controller in Unity, which includes handling player aiming, firing mechanics, and associated animations. The script detects mouse input for firing, manages the gun's firing and reloading states, and controls the bullet projectile's motion. It also updates the player's aim direction based on the camera's view and triggers animations and audio effects related to shooting."
    },
    {
        title:"Weapon State",
        snippetImg:'https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/WeaponState.cs.png',
        description:"This script manages the active state of a weapon in Unity. It allows the player to toggle the visibility and functionality of the gun by pressing the '1' key. The script tracks whether the gun is active and updates its state accordingly, enabling or disabling the gun object based on the player's input."
    },
    {
        title:'Weapon Firing',
        snippetImg:'https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/WeaponFiring.cs.png',
        description:"This script manages the firing and reloading mechanics of a weapon in Unity. It handles the instantiation of bullet projectiles, plays muzzle flash particle effects, and updates the weapon's magazine count. The script also controls the firing and reloading animations, adjusts the left-hand IK constraint during reloading, and logs relevant information like the remaining bullets in the magazine. Additionally, it includes methods to start and stop firing, as well as to reload the magazine, ensuring that the weapon's firing state is accurately reflected in both gameplay and animation."
    },
    {
        title:'Bullet Projectile',
        snippetImg:'https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/BulletProjectile.cs.png',
        description:"This script controls the behavior of bullet projectiles in Unity. It initializes the bullet's movement by applying velocity and an impulse force in the forward direction, simulating high-speed motion. The script also handles collision events: when the bullet collides with another object (except other bullets), it instantiates a hit effect at the point of impact and then destroys the bullet. The bullet is also destroyed upon entering a trigger collider or after a set duration (5 seconds), ensuring that it doesn't remain in the scene indefinitely."
    }
  
]
export {sourceCodeData}
export type {sourceCodeType}