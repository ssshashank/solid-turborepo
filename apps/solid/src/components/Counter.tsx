import { createSignal } from "solid-js";

export default function Counter() {
    const [count, setCount] = createSignal(0);
    return (
        <button class="increment bg-red-600" onClick={() => setCount(count() + 1)} type="button">
            <h1 class="text-lg text-info"> Clicks: {count()}</h1>

        </button>
    );
}
