import { ColorRing } from 'react-loader-spinner';

export const ImagePendingView = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%', // Горизонтальное центрирование
        left: '50%', // Вертикальное центрирование
        transform: 'translate(-50%, -50%)', // Чтобы контейнер занимал всю высоту экрана
      }}
    >
      <ColorRing
        visible={true}
        height={80}
        width={80}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
