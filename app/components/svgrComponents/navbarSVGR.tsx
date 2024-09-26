import * as React from "react";
import { SVGProps } from "react";

const navbarSVGR = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1385.453 77.768" // Keeping the original viewBox to maintain the aspect ratio
        width={1385.453} // Keep the width the same
        filter="invert(0%) hue-rotate(0deg)" // Only invert the colors without hue rotation
        height={40} // Reduce the height to 40
        className="excalidraw-svg"
        {...props}
    >
        {
            "eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1Y31PbOFx1MDAxMH7nr8jkXomrnyuJN1LKXHUwMDExjuswQOFop1x1MDAwZiZcdTAwMTaJiWOntkNcYlxm//utTYhcdTAwMWOTXGb0aO/SXHUwMDFilJnE1q7W693v25Vyt9FoNPPpyDa3XHUwMDFhTXvT9aMwSP1Jc7OYv7ZpXHUwMDE2JjGKWHmfJeO0W2r6o9HWu3fJRVx1MDAxNlx1MDAwNqFcdTAwMWZ7w+BhgY3s0MZ5hipf8L7RuCu/K49IbTf3415ky1x1MDAwNaXIPUWCrM9+TOLyiVx1MDAwNoyWYCSdK4RxYG9cbpNcdTAwMTd7u85YmO2gXHUwMDEzuVxyUHLpR5l1kmKq2crGwcXOuFx1MDAxN++eWtU5ap98+7h/65ZfhlF0nE+j0tcswWA4WZanycCehUHef4xIZX7VqjRcdTAwMTn3+rHNipg455OR31xy82kxR8h89iEwW1xyN1O8YItcblx1MDAwZZ5cdTAwMTaSMWa0XHUwMDEwjIi5vLQghPa4XHUwMDEyymCQjGZU11xce59ESVq49lx1MDAxYrXFxzl34XdcdTAwMDc99DBcdTAwMGWczmU5nM5k9sKUg/BcdTAwMDRcdTAwMTCmuVx1MDAxMVxuXGKouUrfhr1+jjrCeJIpSlx1MDAwNGhBXHUwMDE3VDJbpoQyw1xyoJtmLimeP+pcdTAwMDQlZr66RKT+0HaKJfE4iqrRjINZNFx1MDAxN1x1MDAwNFx1MDAxN4XgQ1x1MDAwNX7O1HhcdTAwMTT4XHUwMDBmgKCKKc6ZkYZcdTAwMTGXiyiMXHUwMDA3dXNR0lx1MDAxZDhcZpWz95v/XHUwMDAw0SDoKkRjuqQhQOUyRO+9XHUwMDFj0WeyL8Pok4KT9nj70+HR2eHo7GbtXHUwMDExLZWnuSYgNJXScFlDtJJcdTAwMWVQoJRcdTAwMWFthDCvXHUwMDAytOWX/mX3J1x1MDAwMVojXHUwMDFiiUGV/1xynnH5UiiblbWZU2FcdTAwMTTFdC1DcuflSD44Mr//RW7T7lV6frt/Pv1cdTAwMTDtXelfXHUwMDAxyVxmXHUwMDAzXHUwMDAwRFx1MDAxMiW1gjqSweOSg1GSaFx1MDAwNlx1MDAwMK+DsrFdu6w2XHUwMDFiXHUwMDBmXHUwMDE0M0gmzrVcdTAwMDZcdTAwMGVPkcyUJySChVGqXGJIqWRcdTAwMWTKgoFcdTAwMDTQv1x1MDAxNpQr4fTTvI3AXHUwMDBi4159iY2DXHUwMDE1ksjP8vfJcFx1MDAxOOboxmFcdTAwMTLGeV2jtLudpsmkb/0nL42WV8pGhTm3XHUwMDE1Koa7ajgglTfz66+bS7VXZrhcdTAwMTitp8l19jaqv99Leq3qk4+kp4ZjhdaCu+JcXGH9/stZ3zs/XHUwMDE5dFx1MDAwZsadk6PJdEeN8kF6PTVrznrDPcJBMi2whYFcdTAwMDC+SHrJXHUwMDA0ZotKIVx1MDAwNFx1MDAxN5zUXHUwMDFk+zGcZ8RjXFxcdTAwMTLOOFx1MDAwMLYwKpe0r+dJj1x1MDAwMoONXHUwMDEw7fzXrHdRemP941id42L8PNpTsnLbSrGPKTyQLG32f7yc9sNJXHUwMDBiIG/vnKSjjn9+0Do9vGp/Xn/ac6qkXCLSgMaEuIPWrNcrjyqs0oriR2le8+zf6/XaI4ShXHUwMDE0t9aCgK6eXGJcdTAwMWZoz1x1MDAxNFx1MDAwMNWEuJrxxvq1Yf0zvf5Jcn9cdTAwMTDpZVx1MDAwNSb1syo3XGZcdTAwMWSq9LlcbulcdTAwMGZeTvrTyVi0/vQnyef9w6j1TSe725PzNSc97vClpyUhZUfXStWafXFWxXqIdZhLylx1MDAxMdivY/3Kw6pmXHUwMDFlOkDBXHUwMDE4ivSRrpMvdHukVXFcdTAwMThBilFcIiuuzLo9QWGxZXnr9uvIe+0pMFpcdTAwMWKK22outWTV5S1cdTAwMDaewfxzbPNU40HNPGtvJWZcdTAwMWXtXHRFuFx1MDAwNCnwzMVcdTAwMTTjz1x1MDAxYlx1MDAwNOZcdTAwMTmNqoxcdTAwMTNccoYsOEg8rFhMYXKNloKCMPI5g6vis1jHNmbri3+dj3NcdTAwMDRcdTAwMTPG+6GqIXrD4Di8tVx1MDAwYnlpXod20n5Krjz142zkp4jR5sasPlx1MDAxNjXHXHUwMDE2XHS8u9+4/1x1MDAxYuH+iFIifQ=="
        }
        <g strokeLinecap="round">
            <path fill="#e3fafc" d="m20.563 4.406 1367.02-1.32-2.44 50.09-1363.08-.15" />
            <path
                fill="none"
                stroke="#1e1e1e"
                strokeWidth={2}
                d="M21.993 3.366c465.45 4.04 931.94 4.38 1364.46 0m-1364.46 0c308.18-.03 615.99 0 1364.46 0m0 0c-.27 14.76 1.36 28.38 0 49.53m0-49.53c.94 16.65-.28 34.53 0 49.53m0 0c-347.94-.91-695.76-.91-1364.46 0m1364.46 0c-443.36.61-887.7.83-1364.46 0m0 0c-1.16-14.84.8-27.17 0-49.53m0 49.53c-1.01-9.26.71-20.66 0-49.53"
            />
        </g>
        <g strokeLinecap="round">
            <path fill="#e3fafc" d="m2.13 30.327 1362.02.56 1.38 49.38-1362.54-.33" />
            <path
                fill="none"
                stroke="#1e1e1e"
                strokeWidth={2}
                d="M1 30.607c302.19 1.8 603.64 2.2 1364.46 0M1 30.607c401.78 4.12 803.67 4.4 1364.46 0m0 0c1.32 16.07.85 32.79 0 49.53m0-49.53c-.33 14.49-.15 28.88 0 49.53m0 0c-393.77-2.43-788.42-1.55-1364.46 0m1364.46 0c-422.8 1.44-845.09 1.3-1364.46 0m0 0c1.24-19.58-1.66-36.97 0-49.53m0 49.53c1.28-17.52-.28-33.89 0-49.53"
            />
        </g>
        <path
            fill="none"
            stroke="#1e1e1e"
            strokeLinecap="round"
            strokeWidth={2}
            d="M1.623 31.344c4.53-6.78 10.5-14.42 19.67-27.45m-19.67 27.45c4.26-5.96 8.74-12.02 19.67-27.45M1365.802 79.662c6.34-8.26 11.88-17.37 20.24-27.45m-20.24 27.45c4.69-6.28 9.38-12.09 20.24-27.45M1365.52 32.168c6.29-10.36 13.45-20.39 19.67-28m-19.67 28c5.99-7.93 11.72-16.34 19.67-28"
        />
        <g fillRule="evenodd" strokeLinecap="round">
            <path
                fill="#e3fafc"
                d="m4.298 30.657 16.24-26.27 1363.28-1.13-17.75 26.86-1364.44-1.36"
            />
            <path
                fill="none"
                stroke="#1e1e1e"
                strokeWidth={2}
                d="M2.988 30.427c5.02-9.31 12.68-17.63 18.77-26.95m-18.77 26.95c5.48-7.42 11.39-15.76 18.77-26.95m0 0c490.53 3.23 980.97 3.67 1363.95.48m-1363.95-.48c444.77-3.42 890.13-3.33 1363.95.48m0 0c-5.96 9.47-14.22 22.04-19.74 26.95m19.74-26.95c-5.6 5.95-9.89 14.17-19.74 26.95m0 0c-290.88 3.98-580.84 4.9-1362.98-.48m1362.98.48c-389.72.65-779.07.45-1362.98-.48m0 0s0 0 0 0m0 0s0 0 0 0"
            />
        </g>
    </svg>
);

export default navbarSVGR;
