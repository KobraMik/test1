import {useState} from "react";

export const Buttons = (props: number) => {
    let [state, setState] = useState(props.count)
    return (
        <div className='Content'>
            <div className='number'>
                {state}
            </div>
            <div>
                <div className='button'
                     onClick={() => {
                         if (state < 5) {
                             (setState(state + 1))
                         }
                     }}>
                    inc
                </div>
                <div className='button'
                     onClick={() => {
                         setState(props.count)
                     }}>
                    reset
                </div>
            </div>
        </div>
    )
}