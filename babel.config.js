module.exports = {
    presets: ['@babel/preset-env','@babel/typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
    plugins: ['@babel/plugin-transform-regenerator']
};
