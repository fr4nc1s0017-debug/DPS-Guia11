import{config} from 'dotenv'
config()

export const PORT= process.env.PORT || 3000
export const DB_HOST=process.env.DB_HOST || 'localhost'
export const DB_PORT=process.env.DB_PORT || 3306
export const DB_USER=process.env.DB_USER || 'root'
export const DB_PASSWORD=process.env.DB_PASSWORD || ''
export const DB_DATABASE=process.env.DB_DATABASE || 'market'
MYSQL_DATABASE="railway"
MYSQL_PUBLIC_URL="mysql://${{MYSQLUSER}}:${{MYSQL_ROOT_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}/${{MYSQL_DATABASE}}"
MYSQL_ROOT_PASSWORD="cOPklyYyCVowBKTviCmwBpQFtIVESmnR"
MYSQL_URL="mysql://${{MYSQLUSER}}:${{MYSQL_ROOT_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:3306/${{MYSQL_DATABASE}}"
MYSQLDATABASE="${{MYSQL_DATABASE}}"
MYSQLHOST="${{RAILWAY_PRIVATE_DOMAIN}}"
MYSQLPASSWORD="${{MYSQL_ROOT_PASSWORD}}"
MYSQLPORT="3306"
MYSQLUSER="root"