export interface Data {
    header: Header;
    about: About;
    brands: Brand[];
    contact: Contact;
    footer: Footer;
}

export interface Header {
    desc: string;
    img: string;
    video: string;
    btn_text: string;
    btn_link: string;
}

export interface ValueData {
    id: number;
    title: string;
}

export interface About {
    title: string;
    desc: string;
    img: string;
    values: ValueData[]; 
}

export interface Value {
    id: number;
    title: string;
}

export interface Brand {
    id: number;
    title: string;
    desc: string;
    img: string;
    categories: Category[];
}

export interface Category {
    id: number;
    title: string;
}

export interface Contact {
    advertisement: string;
}

export interface Footer {
    logo: string;
    phone: string;
    email: string;
    socials: Socials;
}

export interface Socials {
    facebook: string;
    twitter: string;
    instagram: string;
    snapchat: string;
}


export interface CategoryData {
    id:number;
    name:string;
    img:string;
}