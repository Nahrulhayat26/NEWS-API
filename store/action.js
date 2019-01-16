import { BERITA } from './actionTypes'

export const berita = (data) => {
    return {
        type: BERITA,
        payload: data
    }
}