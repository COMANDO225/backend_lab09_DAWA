
export const success = ({ res, data, status = 200 }) => {
    return res.status(status).json({
        ok: true,
        data
    })
}

export const failed = ({ res, error, status = 500 }) => {
    return res.status(status).json({
        ok: false,
        error
    })
}