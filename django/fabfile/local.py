from fabric.api import local


def webpack():
    local('rm mentorship_community/static/webpack_bundles/*')
    local('cd ../reactjs && node_modules/.bin/webpack'
          ' --config webpack.local.config.js')
    local('cd ../reactjs && node_modules/.bin/webpack'
          ' --config webpack.prod.config.js')
