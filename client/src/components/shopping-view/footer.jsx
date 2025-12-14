import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function ShoppingFooter() {
    return (
        <footer className="bg-black text-white py-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Ecommerce</h3>
                        <p className="text-gray-400">
                            Premium quality products for your lifestyle. Shop the latest trends
                            in fashion, electronics, and more.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="/shop/home" className="hover:text-white transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/shop/listing" className="hover:text-white transition-colors">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="/shop/account" className="hover:text-white transition-colors">
                                    Account
                                </a>
                            </li>
                            <li>
                                <a href="/shop/search" className="hover:text-white transition-colors">
                                    Search
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Hampinagar, Vijay Nagar, Bangalore 560104</li>
                            <li>support@ecommerce.com</li>
                            <li>+91 9845412665</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Newsletter</h4>
                        <p className="text-gray-400 mb-4">
                            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                        </p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                            />
                            <Button className="bg-primary hover:bg-primary/90">
                                <Mail className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Ecommerce. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default ShoppingFooter;
