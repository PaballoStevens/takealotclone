import { Session } from "next-auth"
import { Button } from "./ui/button"
import { signIn} from "next-auth/react";

function checkout({session}: { session: Session | null}) {
    if (!session) return (
        <Button className="mt-5 h-29 bg-walmart text-white hover:bg-walmart/50 hover:text-white" variant={'outline'} onClick={() => signIn()}>
            Checkout
        </Button>
    )
    return (
        <Button className="mt-5 h-29 bg-walmart hover:bg-walmart/50">
           Checkout
        </Button>
    )

    
}

export default checkout