import {useMemo, useState} from "react";
import {greet} from "./greet";

export function useGreeting(initialName?: string){
    const [name, setName] = useState<string | undefined>(initialName);
    const message = useMemo(()=> greet(name),[name]);
    return {name, setName, message};
}