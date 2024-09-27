// DefinitionSection.tsx
export default function DefinitionSection() {
    return (
        <div className="mb-12 text-left w-full max-w-xs sm:max-w-md mx-auto font-mono text-silverLake">
            <span className="font-bold">malleable</span> (mal-ee-uh-buhl) <br />
            <span>adj. A canvas for infinite possibilities, </span>
            <span
                className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-accent align-bottom animate-typing"
                style={{ width: "17ch" }} // Adjusted width to fit the phrase
            >
                forever unfolding.........
            </span>
        </div>
    );
}





// export default function DefinitionSection() {
//     return (
//         <div className="definition-container mb-12 text-left w-full max-w-xs sm:max-w-md mx-auto text-monospace text-blue-400">
//             <span className="font-bold">malleable</span> (mal-ee-uh-buhl) <br />
//             <span>adj. A canvas for infinite possibilities, forever </span>
//             <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-blue-400 align-bottom animate-typing">
//         unfolding...
//       </span>
//         </div>
//     );
// }
