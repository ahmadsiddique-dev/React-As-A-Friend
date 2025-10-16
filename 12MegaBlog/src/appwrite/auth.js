import { Client, Account, ID} from 'appwrite';
import conf from '../conf/conf';

export class AuthService {
    client = new Client();
    account;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call Another Method;
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw new Error("Error while Createing Account", error);
        }
    }

    async login({email, password}) {
        try {
            await this.account.createEmailSession(email, password)
        } catch (error) {
            throw new Error("Error while logging in Account", error);
        }
    }

    async getCurrentUser() {
        try {
            return this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: logout :: error", error)
        }
    }
}
const authService = new AuthService();


export default authService;