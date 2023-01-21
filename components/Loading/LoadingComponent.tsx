import { Player } from '@lottiefiles/react-lottie-player';

import { ContainerLoading } from './LoadingStyled';

type Loading = {
    w?: string | number,
    h?: string | number
}

function LoadingComponent({ w = '80px', h = '80px' }: Loading) {
    return (
        <ContainerLoading>
            <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_usmfx6bp.json"
                style={{ height: h, width: w }}
            >
            </Player>
        </ContainerLoading>
    );
}

export default LoadingComponent;