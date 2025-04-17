import React from 'react';

const Card = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
                className="w-full h-48 object-cover"
                src="https://via.placeholder.com/400"
                alt="Imagem do Produto"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-blue-600">Título do Produto</div>
                <p className="text-gray-700 text-base">
                    Esta é uma descrição breve do produto. Ele é incrível e você deve experimentá-lo!
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
};

export default Card;