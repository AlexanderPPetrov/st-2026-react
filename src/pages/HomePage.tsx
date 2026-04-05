import DefaultLayout from "../layouts/DefaultLayout"
import type { Maybe } from "../types"
import { UiButton } from "../components/ui"
import SearchUsers from "../features/SearchUsers"

type Props = {
    name: Maybe<string>
    count: Maybe<number>
    setName: React.Dispatch<React.SetStateAction<string>>;
}

function HomePage ({ name, count, setName }: Props) {
    
    return (
        <>
            <DefaultLayout 
                main={<SearchUsers/>}
                sidebar={<div>
                    <div>{name}</div>
                    <UiButton onClick={() => setName("Peter")} 
                            title={"Change Name"}/>
                    <div>{count}</div>
                </div>}
            ></DefaultLayout>
        </>
    )
}

export default HomePage