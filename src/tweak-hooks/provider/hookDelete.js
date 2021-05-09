import {useFetch} from "../../services/useFetch"

const HookDelete = ({params}) => {
    
    const[deleteUrl,options] = params
    const {error, isPending, lists } = useFetch(deleteUrl, options)

    return <div> {isPending && "coucou:) ça charge!"}</div>;
}
 
export default HookDelete;