# Nome do aplicativo
Podcast Menager

# Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episodios separados por categoria

# Dominio
Podcasts feitos em video

# Como


# Features
- Listar os podcast em sessoes de categorias
 - [saude, fitness, mentalidade, humor]
- Filtrar eps por nome de podcast

# Como vou implementar:
Vou retornar em uma api rest (json),
nome do podcast , 
nome do episodio,
 imagem de capa,
 link

```js
{
    podcastName: "flow",
    episode: "CBUM - FLOW #319",
    videoId:"pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=pQSuQmUfS30",
    category["saude", "bodybuilder"]
}
```