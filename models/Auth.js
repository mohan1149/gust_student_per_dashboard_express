import jwt from 'jsonwebtoken';
export default {
    validateToken: (req) => {
        const secretKey = '14701A0549';
        const token = req.body.token;
        try {
            const decoded = jwt.verify(token, secretKey);
            if (decoded) {
                return ({
                    valid: true,
                    user: decoded,
                });
            } else {
                return ({
                    valid: false,
                });
            }
        } catch (error) {
            console.error('JWT validation error:', error.message);
            return null;
        }
    },
    login: (req) => {
        const secretKey = '14701A0549';
        const expiresIn = '1h';
        const payload = {
            username: req.body.username,
        };
        const token = jwt.sign(payload, secretKey, { expiresIn });
        return {
            token:token,
            user:req.body,
        };
    },

};
