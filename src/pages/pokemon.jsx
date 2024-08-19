import { useEffect, useState } from "react";

export const Pokemon = () => {
    const [poke, setPoke] = useState(null);

    useEffect(() => {
        async function obtenerDataApi() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur/");
            const datosApi = await response.json();
            setPoke(datosApi);
        }
        obtenerDataApi();
    }, []);

    return  (
        <div>
            {poke ? (
                <>
                <div>
                    <h2>Pokemon: {poke.name}</h2>
                    <p>ID: {poke.id}</p>
                    <p>Base experience: {poke.base_experience}</p>
                    <p>Height: {poke.height} dm</p>
                    <p>Weight: {poke.weight} hg</p>
                    
                    <p>Species: {poke.species.name}</p>
                    <p>
                        Sprites:
                        <div>
                            <img src={poke.sprites.front_default} alt={`${poke.name} front`} />
                            <img src={poke.sprites.back_default} alt={`${poke.name} back`} />
                            <img src={poke.sprites.front_shiny} alt={`${poke.name} shiny front`} />
                            <img src={poke.sprites.back_shiny} alt={`${poke.name} shiny back`} />
                        </div>
                    </p>
                    </div>
                    <div>
                    <p>
                        Stats:
                        <ul>
                            {poke.stats.map((stat, index) => (
                                <li key={index}>
                                    {stat.stat.name}: {stat.base_stat}
                                </li>
                            ))}
                        </ul>
                    </p>
                    <p>
                        Types:
                        <ul>
                            {poke.types.map((type, index) => (
                                <li key={index}>{type.type.name}</li>
                            ))}
                        </ul>
                    </p>
                    </div>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};