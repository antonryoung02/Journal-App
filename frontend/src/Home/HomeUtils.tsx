export function getDateString(date:Date):string {
    const months:string[] = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
    const day:number = date.getDate();
    const monthIndex:number = date.getMonth();
    const year:number = date.getFullYear();
  
    return `${months[monthIndex]} ${day}, ${year}`;
  }