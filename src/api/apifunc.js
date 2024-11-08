import axios from 'axios';


export async function mainApi(world){
    const response = await axios.get(`http://localhost:4000/news?world=${world}&page=main`)
    return response.data;
}

export async function sectionApi(world, section, pageNum){
    const response = await axios.get(`http://localhost:4000/news?world=${world}&page=section&section=${section}&pageNum=${pageNum}`)
    return response.data;
}

export async function searchApi(world, keyword, pageNum){
    const response = await axios.get(`http://localhost:4000/news?world=${world}&page=search&keyword=${keyword}&pageNum=${pageNum}`)
    return response.data;
}