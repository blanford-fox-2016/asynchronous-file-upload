var Customer = require('../models/customer')
var Item = require('../models/item')
var Cart = require('../models/cart')

module.exports = {

    //-----------------------------------------CUSTOMER------------------------------------------
    getCustomer: function (req, res) {
        Customer.find({}, function (err, customers) {
            if (err) {
                throw err
            }

            res.json(customers)
        })
    },

    createCustomer: function (req, res) {
        var customer = new Customer({
            name: req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zip: req.body.zip,
            phone: req.body.phone
        })
        customer.save(function (err, customer) {
            if (err) {
                throw err
            }

            res.json({
                status: "Customer di tambah",
                customer: customer
            })
        })
    },

    deleteCustomer: function (req, res) {
        Customer.findOneAndRemove({
            _id: req.params.id
        }, function (err, customer) {
            if (err) {
                throw err
            }

            res.json({
                status: "Customer di hapus",
                customer: customer
            })
        })
    },

    getCustomerEdit: function (req, res) {
        Customer.findOne({
            _id: req.params.id
        }, function (err, customer) {
            if (err) {
                throw err
            }

            res.json({
                status: "get customer",
                customer: customer
            })
        })
    },

    updateCustomer: function (req, res) {
        Customer.findByIdAndUpdate(
            req.params.id, {
                name: req.body.name,
                memberId: req.body.memberId,
                address: req.body.address,
                zip: req.body.zip,
                phone: req.body.phone
            },
            function (err) {
                console.log('updated!')
            }
        )
        Customer.findById(req.params.id, function (err, data) {
            if (err) throw err
            console.log('found it!!!!!!!!')
            res.json({
                status: "Customer di update",
                customer: data
            })
        })
    },



    //-----------------------------------------ITEM------------------------------------------



    getItem: function (req, res) {
        Item.find({}, function (err, item) {
            if (err) {
                throw err
            }

            res.json(item)
        })
    },

    createItem: function (req, res) {
        var item = new Item({
            itemCode: req.body.itemCode,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock
        })
        item.save(function (err, item) {
            if (err) {
                throw err
            }

            res.json({
                status: "Item di tambah",
                item: item
            })
        })
    },

    deleteItem: function (req, res) {
        Item.findOneAndRemove({
            _id: req.params.id
        }, function (err, item) {
            if (err) {
                throw err
            }

            res.json({
                status: "Item di hapus",
                item: item
            })
        })
    },

    getItemEdit: function (req, res) {
        Item.findOne({
            _id: req.params.id
        }, function (err, item) {
            if (err) {
                throw err
            }

            res.json({
                status: "get item",
                item: item
            })
        })
    },

    updateItem: function (req, res) {
        Item.findByIdAndUpdate(
            req.params.id, {
                itemCode: req.body.itemCode,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock
            },
            function (err) {
                console.log('updated!')
            }
        )
        Item.findById(req.params.id, function (err, data) {
            if (err) throw err
            console.log('found it!!!!!!!!')
            res.json({
                status: "Item di update",
                item: data
            })
        })
    },

    //-----------------------------------------CART------------------------------------------


    getCart: function (req, res) {
        Cart.find({}, function (err, cart) {
            if (err) {
                throw err
            }

            res.json(cart)
        })
    },

    createCart: function (req, res) {
        var cart = new Cart({
            memberId: req.body.memberId,
            total: req.body.total,
            transactionDate: req.body.transactionDate
            // itemList: req.body.itemList
        })
        cart.save(function (err, cart) {
            if (err) {
                throw err
            }

            res.json({
                status: "Cart di tambah",
                cart: cart
            })
        })
    },

    deleteCart: function (req, res) {
        Cart.findOneAndRemove({
            _id: req.params.id
        }, function (err, cart) {
            if (err) {
                throw err
            }

            res.json({
                status: "Cart di hapus",
                cart: cart
            })
        })
    },

    getCartEdit: function (req, res) {
        Cart.findOne({
            _id: req.params.id
        }, function (err, cart) {
            if (err) {
                throw err
            }

            res.json({
                status: "get cart",
                cart: cart
            })
        })
    },

    updateCart: function (req, res) {
        Cart.findByIdAndUpdate(
            req.params.id, {
                memberId: req.body.memberId,
                total: req.body.description,
                transactionDate: req.body.transactionDate,
                itemList: req.body.itemList
            },
            function (err) {
                console.log('updated!')
            }
        )
        Cart.findById(req.params.id, function (err, data) {
            if (err) throw err
            console.log('found it!!!!!!!!')
            res.json({
                status: "Cart di update",
                cart: data
            })
        })
    },

    //-----------------------------------------CART------------------------------------------


}