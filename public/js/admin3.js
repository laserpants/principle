App.init({
    namespace: 'sphere',
    routes: {
        ""                              : "index",
        "flush"                         : "emptyCache",
        "logout"                        : "logout",
        "queue"                         : "showQueue",
        "profile"                       : "showUserProfile",
        "user/password"                 : "updatePassword",
        // ---------------------------- :
        // area                         :
        // ---------------------------- :
        "areas"                         : "showAreas",
        "area/create/region/:id"        : "createArea",
        "area/edit/:id"                 : "editArea",
        "area/delete/:id"               : "deleteArea",
        "area/:id"                      : "viewArea",
        // ---------------------------- :
        // regions                      :
        // ---------------------------- :
        "regions"                       : "showRegions",
        "region/edit/:id"               : "editRegion",
        "region/delete/:id"             : "deleteRegion",
        "region/create"                 : "createRegion",
        "region/:id"                    : "viewRegion",
        // ---------------------------- :
        // depot                        :
        // ---------------------------- :
        "depots"                        : "showDepots",
        "depots/region/:id"             : "showDepotsForRegion",
        "depot/edit/:id"                : "editDepot",
        "depot/delete/:id"              : "deleteDepot",
        "depot/create/region/:id"       : "createDepot",
        "depot/:id"                     : "viewDepot",
        // ---------------------------- :
        // driver                       :
        // ---------------------------- :
        "drivers"                       : "manageDrivers",
        "driver/assign/vehicle/:id"     : "assignDriverToVehicle",
        // ---------------------------- :
        // fuel                         :
        // ---------------------------- :
        "fuel"                          : "manageFuel",
        "fuel/vehicle/:id"              : "manageFuel",
        "fuel/add/vehicle/:id"          : "addFuelToVehicle",
        // ---------------------------- :
        // maintenance                  :
        // ---------------------------- :
        "vehicle-maintenance"           : "manageVehicleMaintenance",
        "maintenance/vehicle/:id"       : "manageVehicleMaintenance",
        "maintenance/register/vehicle/:id"       
                                        : "logMaintenanceActivityForVehicle",
        "maintenance/complete/vehicle/:id"       
                                        : "completeMaintenanceActivityForVehicle",
        // ---------------------------- :
        // maintenance-activity-type    :
        // ---------------------------- :
        "maintenance-types"             : "showMaintenanceActivityTypes",
        "maintenance-type/edit/:id"     : "editMaintenanceActivityType",
        "maintenance-type/delete/:id"   : "deleteMaintenanceActivityType",
        "maintenance-type/create"       : "createMaintenanceActivityType",
        // ---------------------------- :
        // customer                     :
        // ---------------------------- :
        "customers"                     : "showCustomers",
        "customers/category/:id"        : "showCustomersForPriceCat",
        "customers/area/:id"            : "showCustomersForArea",
        "customer/edit/:id"             : "editCustomer",
        "customer/create"               : "createCustomer",
        "customer/:id/tab/:tab"         : "viewCustomer",
        "customer/:id"                  : "viewCustomer",
        // ---------------------------- :
        // contact                      :
        // ---------------------------- :
        "contact/customer/:id/create"   : "createCustomerContact",
        "contact/:id/edit"              : "editCustomerContact",
        "contact/:id/delete"            : "deleteCustomerContact",
        // ---------------------------- :
        // customer-activity            :
        // ---------------------------- :
        "activity/customer/:id"         : "showCustomerActivity",
        // ---------------------------- :
        // complaint                    :
        // ---------------------------- :
        "complaints"                    : "showComplaints",
        "complaints/customer/:id"       : "showComplaintsForCustomer",
        "complaint/:id"                 : "viewComplaint",
        // ---------------------------- :
        // stock-damage                 :
        // ---------------------------- :
        "damage-types"                  : "showDamageTypes",
        "damage-type/edit/:id"          : "editDamageType",
        "damage-type/delete/:id"        : "deleteDamageType",
        "damage-type/create"            : "createDamageType",
        // ---------------------------- :
        // stock                        :
        // ---------------------------- :
        "stock"                         : "manageStock",
        "stock/depot/:id"               : "manageStock",
        "stock/add/depot/:id"           : "addStockToDepot",
        "stock/adjust/depot/:id"        : "adjustStockForDepot",
        "stock/report/depot/:id"        : "reportDamagedStockForDepot",
        "stock/activity/depot/:id"      : "showStockActivity",
        "stock-damage-report/:id"       : "viewStockDamageReport",
        // ---------------------------- :
        // vehicle                      :
        // ---------------------------- :
        "vehicles/depot/:id"            : "showVehiclesForDepot",
        "vehicles/weight-class/:id"     : "showVehiclesInWeightClass",
        "vehicles"                      : "showVehicles",
        "vehicle/edit/:id"              : "editVehicle",
        "vehicle/delete/:id"            : "deleteVehicle",
        "vehicle/create"                : "createVehicle",
        "vehicle/:id"                   : "viewVehicle",
        // ---------------------------- :
        // product-price-category       :
        // ---------------------------- :
        "price-categories"              : "showPriceCategories",
        "price-category/edit/:id"       : "editPriceCategory",
        "price-category/delete/:id"     : "deletePriceCategory",
        "price-category/create"         : "createPriceCategory",
        // ---------------------------- :
        // product                      :
        // ---------------------------- :
        "products"                      : "showProducts",
        "products/recover"              : "showDeletedProducts",
        "products/incomplete"           : "showIncompleteProducts",
        "product/edit/:id"              : "editProduct",
        "product/create"                : "createProduct",
        "product/:id"                   : "viewProduct",
        // ---------------------------- :
        // weight-category              :
        // ---------------------------- :
        "weight-classes"                : "showWeightClasses",
        "weight-class/edit/:id"         : "editWeightClass",
        "weight-class/delete/:id"       : "deleteWeightClass",
        "weight-class/create"           : "createWeightClass",
        // ---------------------------- :
        // order                        :
        // ---------------------------- :
        "orders"                        : "showOrders",
        "order/:id"                     : "viewOrder",
        "order/edit/:id"                : "editOrder",
        "orders/customer/:id"           : "showOrdersForCustomer",
        "order/:id/log"                 : "showOrderActivityLog",
        // ---------------------------- :
        // user                         :
        // ---------------------------- :
        "users"                         : "showUsers",
        "user/edit/:id"                 : "editUser",
        "user/delete/:id"               : "deleteUser",
        "user/create"                   : "createUser",
        "user/:id"                      : "viewUser",
        // ---------------------------- :
        // commission                   :
        // ---------------------------- :
        "commissions"                   : "commissionMatrix",
        "commissions/:index"            : "commissionMatrix",
        // ---------------------------- :
        // system                       :
        // ---------------------------- :
        "task/settings"                 : "editTaskSettings",
        "system/activity"               : "showSystemActivityLog",
 
        // //////////////////////////// :
        // FIELD STAFF                  :
        // //////////////////////////// :

        // ---------------------------- :
        // customer                     :
        // ---------------------------- :
        "!f/customers/all"              : "fieldstaff_showAllCustomers",
        "!f/customers/pending"          : "fieldstaff_showPendingCustomers",
        "!f/customer/register/:id"      : "fieldstaff_registerCustomer",
        "!f/customers"                  : "fieldstaff_showCustomers",
        "!f/customer/create"            : "fieldstaff_createCustomer",
        "!f/customer/:id"               : "fieldstaff_viewCustomer",
        "!f/customer/:id/tab/:tab"      : "fieldstaff_viewCustomer",
        // ---------------------------- :
        // contact                      :
        // ---------------------------- :
        //"!f/contact/customer/:id/create": "fieldstaff_createCustomerContact",
        "!f/contact/:id/edit"           : "fieldstaff_editCustomerContact",
        "!f/contact/:id/delete"         : "fieldstaff_deleteCustomerContact",
        // ---------------------------- :
        // complaint                    :
        // ---------------------------- :
         "!f/complaint/:id"             : "fieldstaff_viewComplaint",
        // ---------------------------- :
        // product                      :
        // ---------------------------- :
        "!f/price-list/:id"             : "fieldstaff_showProducts",
        "!f/product/:id"                : "fieldstaff_viewProduct",
        // ---------------------------- :
        // order                        :
        // ---------------------------- :
        "!f/orders"                     : "fieldstaff_showOrders",
        "!f/order/edit/:id"             : "fieldstaff_editOrder",
        "!f/order/:id"                  : "fieldstaff_viewOrder",
        "!f/order/:id/log"              : "fieldstaff_showOrderActivityLog",
        // ---------------------------- :
        // stock                        :
        // ---------------------------- :
        "!f/stock"                      : "fieldstaff_showStock",
        // ---------------------------- :
        // dispatch                     :
        // ---------------------------- :
        "!f/dispatches"                 : "fieldstaff_showDispatches",
        // ---------------------------- :
        // task                         :
        // ---------------------------- :
        "!f/tasks"                      : "fieldstaff_showTasks",
        // ---------------------------- :
        // performance                  :
        // ---------------------------- :
        "!f/performance"                : "fieldstaff_viewPerformance",
 
        // ---------------------------- :
        // user                         :
        // ---------------------------- :
 
        // //////////////////////////// :
        // DRIVER                       :
        // //////////////////////////// :
        "!v/orders"                     : "driver_showOrders",
        "!v/orders/delivered"           : "driver_showDeliveredOrders",
        "!v/depot"                      : "driver_viewDepot",
        "!v/stock/customer"             : "driver_showStock",
        "!v/stock/return"               : "driver_showReturnStock",
        "!v/performance/today"          : "driver_performanceToday",
        "!v/performance/weekly"         : "driver_performanceWeekly",
        "!v/performance/monthly"        : "driver_performanceMonthly",


        // //////////////////////////// :
        // CALL CENTER                  :
        // //////////////////////////// :

        // ---------------------------- :
        // customer                     :
        // ---------------------------- :
        "!c/customers/all"              : "callcenter_showCustomers",
        "!c/customer/create"            : "callcenter_createCustomer",
        "!c/customers"                  : "callcenter_showAreaCustomers",
        "!c/location/customer/:id"      : "callcenter_viewCustomerLocation",
        "!c/orders/customer/:id"        : "callcenter_viewOrdersForCustomer",
        "!c/complaints/customer/:id"    : "callcenter_viewComplaintsForCustomer",
        "!c/activity/customer/:id"      : "callcenter_viewActivityForCustomer",
        "!c/contacts/customer/:id"      : "callcenter_viewContactsForCustomer",
        "!c/customer/:id"               : "callcenter_viewCustomer",
        "!c/customer/:id/tab/:tab"      : "callcenter_viewCustomer",
        "!c/customer/edit/:id"          : "callcenter_editCustomer",
        // ---------------------------- :
        // contact                      :
        // ---------------------------- :
        // "!c/contact/customer/:id/create": "callcenter_createCustomerContact",
        "!c/contact/:id/edit"           : "callcenter_editCustomerContact",
        "!c/contact/:id/delete"         : "callcenter_deleteCustomerContact",
        // ---------------------------- :
        // customer call activity       :
        // ---------------------------- :
        //"!c/activity/register/:id"      : "callcenter_registerActivity",
        // ---------------------------- :
        // complaint                    :
        // ---------------------------- :
        "!c/complaint/:id"              : "callcenter_viewComplaint",
        // ---------------------------- :
        // order                        :
        // ---------------------------- :
        "!c/orders/date/:date"          : "callcenter_showOrdersForDate",
        "!c/orders"                     : "callcenter_showOrders",
        "!c/order/edit/:id"             : "callcenter_editOrder",
        "!c/order/delete/:id"           : "callcenter_deleteOrder",
        "!c/order/create"               : "callcenter_createOrder",
        "!c/order/:id"                  : "callcenter_viewOrder",
        "!c/order/:id/log"              : "callcenter_showOrderActivityLog",
        // ---------------------------- :
        // product                      :
        // ---------------------------- :
        "!c/price-list/:id"             : "callcenter_showProducts",
        "!c/product/:id"                : "callcenter_viewProduct",
        // ---------------------------- :
        // sidebar                      :
        // ---------------------------- :
        "!c/sidebar/tasks"              : "callcenter_showTasks",
        "!c/sidebar/stock"              : "callcenter_showStockSummary",
        "!c/sidebar/calendar"           : "callcenter_showCalendar",
        // ---------------------------- :
        // widgets                      :
        // ---------------------------- :
        "!c/widgets/performance"        : "callcenter_viewPerformance",
        // ---------------------------- :
        // task                         :
        // ---------------------------- :
        "!c/tasks/customer/:id"         : "callcenter_viewTasksForCustomer",
        "!c/tasks"                      : "callcenter_showTasks",
  
        // //////////////////////////// :
        // DEPOT MANAGEMENT             :
        // //////////////////////////// :

        // ---------------------------- :
        // dispatch                     :
        // ---------------------------- :
        "!d/queued"                     : "depot_showQueuedDispatches",
        "!d/dispatched"                 : "depot_showDispatched",
        "!d/dispatch/:id"               : "depot_viewDispatch",
        "!d/dispatch/:id/log"           : "depot_showDispatchLog",
        // ---------------------------- :
        // product                      :
        // ---------------------------- :
        "!d/product/:id"                : "depot_viewProduct",
        // ---------------------------- :
        // order                        :
        // ---------------------------- :
        "!d/orders/dispatch/:id"        : "depot_showDispatchOrders",
        "!d/order/:id/log"              : "depot_showOrderLog",
        // ---------------------------- :
        // customer                     :
        // ---------------------------- :
        "!d/customer/:id"               : "depot_viewCustomer",
        // ---------------------------- :
        // vehicle                      :
        // ---------------------------- :
        "!d/vehicles"                   : "depot_showVehicles",
        "!d/vehicle/:id"                : "depot_viewVehicle",
        // ---------------------------- :
        // fuel                         :
        // ---------------------------- :
        "!d/fuel/add/vehicle/:id"       : "depot_addFuelToVehicle",
        // ---------------------------- :
        // maintenance                  :
        // ---------------------------- :
        "!d/maintenance/register/vehicle/:id"       
                                        : "depot_logMaintenanceActivityForVehicle",
        "!d/maintenance/complete/vehicle/:id"       
                                        : "depot_completeMaintenanceActivityForVehicle",
        // ---------------------------- :
        // driver                       :
        // ---------------------------- :
        "!d/sidebar/drivers"            : "depot_showDrivers",
        "!d/driver/assign/vehicle/:id"  : "depot_assignDriverToVehicle",
        // ---------------------------- :
        // stock                        :
        // ---------------------------- :
        "!d/sidebar/stock-summary"      : "depot_showStockSummary",
        "!d/sidebar/add-stock"          : "depot_addStock",
        "!d/sidebar/report-damages"     : "depot_reportStockDamage",
        "!d/sidebar/stock-adjustment"   : "depot_makeStockAdjustment",
        "!d/stock/activity"             : "depot_showStockActivity",
        "!d/stock-damage-report/:id"    : "depot_viewStockDamageReport",
        // ---------------------------- :
        // order queueing
        // ---------------------------- :
        "!d/queueing/vehicles"          : "depot_showAvailableVehicles",
        "!d/load/vehicle/:id"           : "depot_load",

        // //////////////////////////// :
        // ORDER QUEUEING               :
        // //////////////////////////// :

        // ---------------------------- :
        // dispatch                     :
        // ---------------------------- :
        "!q/dispatches"                 : "queueing_showDispatches",
        "!q/dispatches/all"             : "queueing_showDispatchHistory",
        "!q/dispatch/:id"               : "queueing_viewDispatch",
        "!q/load/vehicle/:id"           : "queueing_load",

        // ---------------------------- :
        // vehicle                      :
        // ---------------------------- :
        "!q/vehicles"                   : "queueing_showVehicles",
        "!q/vehicle/:id"                : "queueing_viewVehicle",
  
        // ---------------------------- :
        // order                        :
        // ---------------------------- :
        "!q/order/:id"                  : "queueing_viewOrder",
 
        // ---------------------------- :
        // product                      :
        // ---------------------------- :
        "!q/product/:id"                : "queueing_viewProduct"
 
    },
    index: function() {

        $('#main').html('Welcome!');

    },
    error: function(e) {
        T.render('admin/error', function(t) {

            var message = 'Unknown error.';
            
            if (e) {
                var obj = e.responseJSON;
                if (obj && obj.message) {
                    message = obj.message;
                } else {
                    message = e.responseText;
                }
            }
    
            $('#main').html(t({message: message}));

        });
    },
    offline: function() {
        T.render('admin/offline', function(t) {
            $('#main').html(t());
        });
    },
    notify: function(msg, type) {
        msg = type + ': ' + msg;
        $('#log').prepend('<tr><td>' + msg + ' </td><td><a href="javascript:" class="note-dismiss">Dismiss</a></td></tr>');
    },
    emptyCache: function() {
        store.clear();
        $('#main').html('Cache cleared!');
    },
    onRequestBegin: function() {
        $('#main').empty();
        $('#info').html('Loading...');
    },
    onRequestEnd: function() {
        $('#info').empty();
    },
    login: function() {
        T.render('admin/login', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);
 
            form.validate({
                rules: {
                    user     : "required",
                    password : "required"
                },
                submitHandler: function(form) {

                    var user  = form['user'].value,
                        pass  = form['password'].value,
                        token = $(document.body).data('key');
 
                    App.authenticate(user, CryptoJS.HmacSHA1(pass, token).toString());

                }
            });
 
        });
    },
    logout: function() {
        App.logout();
    },
    showQueue: function() {
        T.render('admin/queue', function(t) {

            var queue = Storage.queue.get();
            delete(queue.last);

            $('#main').html(t({
                item: queue
            }));

            $('a.queue-item-process').click(function() {
                Storage.queue.process($(this).data('id'), function() {
                    App.refresh();
                });
            });

            $('a.queue-item-remove').click(function() {
                Storage.queue.remove($(this).data('id'));
                App.refresh();
            });

            $('button.queue-process').click(function() {

                var items = $('input[name="queue-item"]:checked');
                var ids = [];
                _.each(items, function(el) {
                    ids.push($(el).data('id'));
                });

                var process = function() {
                    if (ids.length) {
                        var index = ids[0];
                        ids = _.tail(ids);
                        Storage.queue.process(index, process);
                    } else {
                        App.refresh();
                    }
                }
                process();

            });

        });
    },
    showUserProfile: function() {
        T.render('admin/user/view', function(t) {
            var appUser = App.user();
            Model.getUser(appUser.id, function(user) {
                user.role = Model.readableRoleName(user.role);
                $('#main').html(t(user)).append('<a href="#user/edit/' + appUser.id + '">Edit</a> | <a href="#user/password">Update password</a>');
            });
        });
    },
    updatePassword: function() {
        T.render('admin/user/password', function(t) {

            var user = App.user();

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "old"     : "required",
                    "new"     : {
                        required  : true,
                        minlength : 5
                    },
                    "confirm" : {
                        required  : true,
                        minlength : 5,
                        equalTo   : "#new"
                    }
                },
                submitHandler: function(form) {

                    var token = $(document.body).data('key'),
                        pass  = CryptoJS.HmacSHA1(form['old'].value, token), 
                        local = store.get('sdrp.db.user/' + user.username);

                    try {
                        var msg = CryptoJS.AES.decrypt(local, pass.toString()),
                            obj = JSON.parse(msg.toString(CryptoJS.enc.Utf8));

                        if (obj.username === user.username) {

                            var data = { 
                                password : CryptoJS.HmacSHA1(form['new'].value, token).toString()
                            };
    
                            Storage.process({
                                type        : 'PATCH',
                                resource    : 'user/' + user.id + '/password',
                                data        : data,
                                description : 'Change the password for "' + user.username + '".',
                                purge       : 'user/' + user.username,
                                success: function() {
                                    // All cached data becomes invalid on password change!
                                    store.clear();
                                    App.notify('The password has been changed.');
                                },
                                complete: function() {
                                    window.location.hash = 'profile';
                                }
                            });

                        } else {
                            throw "Authentication error.";
                        }
                        
                    } catch(e) {
                        App.notify('Invalid password.', 'error');
                    }

                }
            });

        });
    },
    showAreas: function() {
        T.render('admin/area/index', function(t) {
            Model.getAreas(function(areas) {
                $('#main').html(t({area: areas}));
            });
        });
    },
    viewArea: function(id) {
        T.render('admin/area/view', function(t) {
            Model.getArea(id, function(area) {
                $('#main').html(t(area));
            });
        });
    },
    showRegions: function() {
        T.render('admin/region/index', function(t) {
            Model.getRegions(function(regions) {
                $('#main').html(t({region: regions}));
            });
        });
    },
    editRegion: function(id) {
        T.render('admin/region/edit', function(t) {
            Model.getRegion(id, function(region) {

                var form = $('<form></form>').append(t(region));
                $('#main').html(form);

                form.validate({
                    rules: {
                        "name": "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name     : form['name'].value
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : 'region/' + id,
                            data        : data,
                            description : 'Edit region "' + region.name + '".',
                            purge       : 'regions',
                            hint        : 'The region could not be updated: ', 
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A region with the name "' + data.name + '" already exists.'
                            },
                            complete: function() {
                                window.location.hash = 'regions';
                            },
                            successMsg: 'Region "' + region.name + '" was successfully updated.'
                        });

                    }
                });

            });
        });
    },
    deleteRegion: function(id) {
        T.render('admin/region/delete', function(t) {

            Model.getRegion(id, function(region) {

                $('#main').html(t(region));

                $('button.confirm').click(function() {

                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'region/' + id,
                        data        : '',
                        description : 'Delete region "' + region.name + '".',
                        purge       : 'regions',
                        hint        : 'Cannot delete region: ',
                        feedback    : {
                            'SQL_FOREIGN_KEY_CONSTRAINT_VIOLATION': '<a href="#areas">Areas</a>/<a href="#depots/region/' + id + '">depots</a> still present in the region.'
                        },
                        complete: function() {
                            window.location.hash = 'regions';
                        },
                        successMsg: 'Region "' + region.name + '" was deleted.'
                    });

                });

            });

        });
    },
    createRegion: function() {
        T.render('admin/region/create', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "name": "required"
                },
                submitHandler: function(form) {

                    var data = {
                        name: form['name'].value
                    };

                    Storage.process({
                        type        : 'POST',
                        resource    : 'region',
                        data        : data,
                        description : 'Create a new region named "' + data.name + '".',
                        purge       : 'regions',
                        hint        : 'The region could not be created: ',
                        feedback    : {
                            'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A region with the name "' + data.name + '" already exists.'
                        },
                        complete: function() {
                            window.location.hash = 'regions';
                        },
                        successMsg: 'Region "' + data.name + '" was successfully created.'
                    });

                }
            });

        });
    },
    viewRegion: function(id) {
        T.render('admin/region/view', function(t) {
            Model.getRegion(id, function(region) {
                $('#main').html(t(region));
            });
        });
    },
    showDepots: function() {
        T.render('admin/depot/index', function(t) {
            Model.getDepots(function(depots) {
                $('#main').html(t({depot: depots}));
            });
        });
    },
    showDepotsForRegion: function(regionId) {
        T.render('admin/depot/index', function(t) {
            Model.getRegion(regionId, function(region) {
                Model.getDepotsForRegion(regionId, function(depots) {

                    $('#main').html(t({
                        region : region,
                        depot  : depots
                    }));

                });
            });
        });
    },
    editDepot: function(id) {
        T.render('admin/depot/edit', function(t) {

            Storage.chain(Model.getUsersByRole('depot-manager'))
                   .chain(Model.getDepot(id))
                   .using(function(depotManagers, depot) {

                Model.getAreasForRegion(depot.regionId, function(areas) {

                    depot.manager = depotManagers;
                    depot.area    = areas;

                    var form = $('<form></form>').append(t(depot));

                    $('#main').html(form);

                    if (depot.depotManager) {
                        $('select[name="manager"]').val(depot.depotManager.id);
                    }

                    form.validate({
                        rules: {
                            "name"           : "required",
                            "latitude"       : "required number",
                            "longitude"      : "required number"
                        },
                        submitHandler: function(form) {

                            var areas = [];
                            _.each($('input[name="area"]:checked'), function(el) {
                                areas.push($(el).data('id'));
                            });

                            var data = {
                                name      : form['name'].value,
                                latitude  : form['latitude'].value, 
                                longitude : form['longitude'].value
                            };

                            var managerId = $('select[name="manager"]').val();
                            if (managerId) {
                                data.depotManagerId = managerId;
                            }

                            if (areas.length) {
                                data.areas = areas;
                            }

                            Storage.process({
                                type        : 'PUT',
                                resource    : '!depot/' + id,
                                data        : data,
                                description : 'Edit depot "' + depot.name + '".',
                                purge       : ['depots', 'areas', 'users'],
                                hint        : 'The depot could not be updated: ', 
                                complete: function() {
                                    window.location.hash = 'depots';
                                },
                                successMsg: 'Depot "' + data.name + '" was updated.'
                            });

                        }

                    });

                });

            });

        });
    },
    deleteDepot: function(id) {
        T.render('admin/depot/delete', function(t) {

            Model.getDepot(id, function(depot) {

                $('#main').html(t(depot));

                $('button.confirm').click(function() {

                    Storage.process({
                        type        : 'DELETE',
                        resource    : '!depot/' + id,
                        data        : '',
                        description : 'Delete depot "' + depot.name + '".',
                        purge       : ['depots', 'users'],
                        hint        : 'Cannot delete depot: ',
                        feedback    : {
                            'SQL_FOREIGN_KEY_CONSTRAINT_VIOLATION': 'This depot has <a href="#vehicles/depot/' + id + '">assigned vehicles</a>.'
                        },
                        complete: function() {
                            window.location.hash = 'depots';
                        },
                        successMsg: 'Depot "' + depot.name + '" was deleted.'
                    });

                });

            });

        });
    },
    createDepot: function(regionId) {
        T.render('admin/depot/create', function(t) {

            Storage.chain(Model.getUsersByRole('depot-manager'))
                   .chain(Model.getRegion(regionId))
                   .chain(Model.getAreasForRegion(regionId))
                   .using(function(depotManagers, region, areas) {

                var form = $('<form></form>').append(t({
                    manager : depotManagers,
                    region  : region,
                    area    : areas
                }));
 
                $('#main').html(form);
    
                form.validate({
                    rules: {
                        "name"           : "required",
                        "latitude"       : "required number",
                        "longitude"      : "required number"
                    },
                    submitHandler: function(form) {

                        var areas = [];
                        _.each($('input[name="area"]:checked'), function(el) {
                            areas.push($(el).data('id'));
                        });

                        var data = {
                            name           : form['name'].value,
                            latitude       : form['latitude'].value, 
                            longitude      : form['longitude'].value,
                            depotManagerId : $('select[name="manager"]').val(),
                            regionId       : regionId
                        };

                        if (areas.length) {
                            data.areas = areas;
                        }

                        Storage.process({
                            type        : 'POST',
                            resource    : '!depot',
                            data        : data,
                            description : 'Create depot "' + data.name + '".',
                            purge       : ['depots', 'areas', 'users'],
                            hint        : 'The depot could not be created: ', 
                            complete: function() {
                                window.location.hash = 'depots';
                            },
                            successMsg: 'New depot "' + data.name + '" was successfully created in ' + region.name + ' region.'
                        });

                    }
                });

            });

        });
    },
    viewDepot: function(id) {
        T.render('admin/depot/view', function(t) {
            Model.getDepot(id, function(depot) {
                Model.getAreasForDepot(id, function(areas) {

                    depot.area = areas;
                    $('#main').html(t(depot));

                });
            });
        });
    },
    manageDrivers: function() {
        T.render('admin/driver/index', function(t) {

            Storage.chain(Model.getUsersByRole('driver'))
                   .chain(Model.getDepots)
                   .using(function(drivers, depots) {

                Storage.load('vehicle', 'vehicles', function(resp) {

                    var vehiclesByDriver = Storage.toMap(resp, 'driverId');

                    _.each(drivers, function(driver) {
                        driver.depot = depots[driver.depotId];
                        if (vehiclesByDriver.hasOwnProperty(driver.id)) {
                            driver.vehicle = vehiclesByDriver[driver.id];
                        } else {
                            driver.vehicle = null;
                        }
                    });

                    $('#main').html(t({driver: drivers}));

                });

            });

        });
    },
    assignDriverToVehicle: function(vehicleId) {
        T.render('admin/vehicle/driver', function(t) {

            Storage.chain(Model.getVehicle(vehicleId))
                   .chain(Model.getUsersByRole('driver'))
                   .using(function(vehicle, drivers) {

                var depotDrivers = _.filter(drivers, function(driver) {
                    return driver.depotId === vehicle.depotId;
                });

                var form = $('<form></form>').append(t({
                    driver  : depotDrivers,
                    vehicle : vehicle
                }));
     
                $('#main').html(form);

                if (vehicle.driverId) {
                    $('select[name="driver"]').val(vehicle.driverId);
                }
    
                form.validate({
                    submitHandler: function(form) {

                        if (form['driver'].value) {

                            var data = {
                                driverId  : form['driver'].value,
                                vehicleId : vehicleId
                            };

                            Storage.process({
                                type        : 'PATCH',
                                resource    : '!vehicle/driver',
                                data        : data,
                                description : 'Assign a driver to vehicle ' + vehicle.regNo + '.',
                                purge       : ['vehicles', 'users'],
                                hint        : 'The driver could not be assigned to the vehicle: ', 
                                complete: function() {
                                    window.location.hash = 'vehicles';
                                }
                            });

                        } else {

                            Storage.process({
                                type        : 'PATCH',
                                resource    : 'vehicle/driver/null',
                                data        : { vehicleId: vehicleId },
                                description : 'Remove driver assignment for vehicle ' + vehicle.regNo + '.',
                                purge       : ['vehicles', 'users'],
                                hint        : 'The driver assignment could not be removed: ', 
                                complete: function() {
                                    window.location.hash = 'vehicles';
                                }
                            });

                        }
                    }

                });
            });
        });
    },
    manageFuel: function(vehicleId) {
        T.render('admin/fuel/vehicle-index', function(t) {
            T.render('admin/fuel/vehicle', function(t_) {

                Model.getVehicles(function(vehicles) {
 
                    $('#main').html(t({vehicle: vehicles}));

                    $('select[name="fuel-vehicle-select"]').on('change', function() {
                        if (this.value) {
                            window.location.hash = 'fuel/vehicle/' + this.value;
                        }
                    });

                    if (vehicleId) {
                        Storage.find(vehicleId, vehicles, function(vehicle) {

                            // Temporarily disable onRequestBegin hook
                            var callback = App.onRequestBegin;
                            App.onRequestBegin = function() {};
                            
                            $('#fuel-summary').empty();

                            Model.getFuelActivityForVehicle(vehicleId, function(activity) {
                                vehicle.activity = activity;
                                $('#fuel-summary').html(t_(vehicle));
                                App.onRequestBegin = callback;
                            });

                            $('select[name="fuel-vehicle-select"]').val(vehicleId);

                        });
                    } else {
                        $('#fuel-summary').empty();
                    }

                });

            });
        });
    },
    addFuelToVehicle: function(vehicleId) {
        T.render('admin/fuel/add', function(t) {
            Model.getVehicle(vehicleId, function(vehicle) {

                var form = $('<form></form>').append(t(vehicle));

                $('#main').html(form);

                $('input[name="meter-reading"]').val(vehicle.meterReading);

                form.validate({
                    rules: {
                        "meter-reading": {
                            required : true,
                            number   : true,
                            min      : vehicle.meterReading
                        },
                        "amount": {
                            required : true,
                            number   : true,
                        }
                    },
                    submitHandler: function(form) {

                        var data = {
                            meterReading : form['meter-reading'].value,
                            amount       : form['amount'].value
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : 'fuel-activity/vehicle/' + vehicleId,
                            data        : data,
                            description : 'Create a fuel activity log entry for vehicle "' + vehicle.regNo + '".',
                            purge       : ['fuel-data-' + vehicleId, 'meter-reading-' + vehicleId],
                            hint        : 'The fuel activity log entry could not be created: ',
                            complete: function() {
                                window.location.hash = 'fuel/vehicle/' + vehicleId;
                            },
                            successMsg: 'The fuel log entry for vehicle "' + vehicle.regNo + '" was successfully created.'
                        });

                    }
                });
                
            });
        });
    },
    manageVehicleMaintenance: function(vehicleId) {
        T.render('admin/maintenance/vehicle-index', function(t) {
            T.render('admin/maintenance/vehicle', function(t_) {
            
                Model.getVehicles(function(vehicles) {
 
                    $('#main').html(t({vehicle: vehicles}));

                    $('select[name="maintenance-vehicle-select"]').on('change', function() {
                        if (this.value) {
                            window.location.hash = 'maintenance/vehicle/' + this.value;
                        }
                    });

                    if (vehicleId) {
                        Storage.find(vehicleId, vehicles, function(vehicle) {

                            // Temporarily disable onRequestBegin hook
                            var callback = App.onRequestBegin;
                            App.onRequestBegin = function() {};
                            
                            $('#maintenance-summary').empty();

                            Model.getMaintenanceActivityForVehicle(vehicleId, function(activity) {
                                vehicle.activity = activity;
                                $('#maintenance-summary').html(t_(vehicle));
                                App.onRequestBegin = callback;
                            });

                            $('select[name="maintenance-vehicle-select"]').val(vehicleId);

                        });
                    } else {
                        $('#maintenance-summary').empty();
                    }

                });

            });

        });
    },
    logMaintenanceActivityForVehicle: function(vehicleId) {
        T.render('admin/maintenance/register', function(t) {

            Storage.chain(Model.getMaintenanceTypes)
                   .chain(Model.getVehicle(vehicleId))
                   .using(function(activityTypes, vehicle) {

                if (_.isEmpty(activityTypes)) {
                    App.error({
                        responseJSON: { message: 'No maintenance activity types found.' }
                    });
                } else {
                    vehicle.activityType = activityTypes;
                    $('#main').html(t(vehicle));

                    var form = $('<form></form>').append(t(vehicle));
    
                    $('#main').html(form);

                    $('input[name="meter-reading"]').val(vehicle.meterReading);
    
                    form.validate({
                        rules: {
                            "meter-reading" : {
                                required : true,
                                number   : true,
                                min      : vehicle.meterReading
                            },
                            "description"   : "required",
                            "start-time"    : "required datetime"
                        },
                        submitHandler: function(form) {
    
                            var data = {
                                meterReading : form['meter-reading'].value,
                                description  : form['description'].value,
                                startTime    : form['start-time'].value,
                                activity     : form['type'].value,
                                vehicleId    : vehicleId
                            };
    
                            Storage.process({
                                type        : 'POST',
                                resource    : '!maintenance/vehicle/' + vehicleId,
                                data        : data,
                                description : 'Create a maintenance activity entry for vehicle "' + vehicle.regNo + '".',
                                purge       : ['vehicles', 'maintenance-data-' + vehicleId, 'meter-reading-' + vehicleId],
                                hint        : 'The maintenance activity log entry could not be created: ',
                                complete: function() {
                                    window.location.hash = 'maintenance/vehicle/' + vehicleId;
                                },
                                successMsg: 'The maintenance activity log entry for vehicle "' + vehicle.regNo + '" was successfully created.'
                            });
    
                        }
                    });

                }

            });

        });
    },
    completeMaintenanceActivityForVehicle: function(vehicleId) {
        T.render('admin/maintenance/complete', function(t) {

            Model.getVehicle(vehicleId, function(vehicle) {

                var form = $('<form></form>').append(t(vehicle));

                $('#main').html(form);

                form.validate({
                    rules: {
                        "end-time" : {
                            required       : true,
                            datetime       : true,
                            moreRecentThan : vehicle.maintenanceStartTime
                        }
                    },
                    submitHandler: function(form) {

                        var data = {
                            endTime: form['end-time'].value
                        };

                        Storage.process({
                            type        : 'PATCH',
                            resource    : '!maintenance/complete/vehicle/' + vehicleId,
                            data        : data,
                            description : 'Complete maintenance activity for vehicle "' + vehicle.regNo + '".',
                            purge       : ['vehicles', 'maintenance-data-' + vehicleId],
                            hint        : 'The maintenance activity could not be completed: ',
                            complete: function() {
                                window.location.hash = 'maintenance/vehicle/' + vehicleId;
                            },
                            successMsg: 'The maintenance activity for "' + vehicle.regNo + '" was completed.'
                        });

                    }
                });

            });

        });
    },
    createArea: function(regionId) {
        T.render('admin/area/create', function(t) {

            Storage.chain(Model.getDepotsForRegion(regionId))
                   .chain(Model.getRegion(regionId))
                   .using(function(regionDepots, region) {

                var form = $('<form></form>').append(t({
                    depot      : regionDepots,
                    regionId   : regionId,
                    regionName : region.name
                }));

                $('#main').html(form);

                form.validate({
                    rules: {
                        "name": "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name     : form['name'].value,
                            depotId  : form['depot'].value, 
                            regionId : regionId 
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : 'area',
                            data        : data,
                            description : 'Create a new area named "' + data.name + '".',
                            purge       : ['areas', 'area-users'],
                            hint        : 'The area could not be created: ',
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'An area with the name "' + data.name + '" already exists in ' + region.name + ' region.'
                            },
                            complete: function() {
                                window.location.hash = 'areas';
                            },
                            successMsg: 'The area "' + data.name + '" was successfully created.'
                        });

                    }
                });

            });

        });
    },
    editArea: function(id) {
        T.render('admin/area/edit', function(t) {
            T.render('admin/user/select', function(t_) {

                Storage.chain(Model.getArea(id))
                       .chain(Model.getUsersByRole('field-staff'))
                       .chain(Model.getUsersByRole('call-center'))
                       .chain(Model.getDepots)
                       .using(function(area, fieldstaff, callcenter, depots) {
    
                    // Inject region id into user collections
    
                    _.each(fieldstaff, function(staff) {
                        staff.regionId = depots.hasOwnProperty(staff.depotId) ? depots[staff.depotId].regionId : null;
                    });
    
                    _.each(callcenter, function(staff) {
                        staff.regionId = depots.hasOwnProperty(staff.depotId) ? depots[staff.depotId].regionId : null;
                    });
    
                    var filterByRegion = function(item) {
                        return item.regionId == area.regionId;
                    };
    
                    // All field staff in the region
                    var regionFieldstaff = Model.filter(fieldstaff, filterByRegion);
                    // All call center users in the region
                    var regionCallcenter = Model.filter(callcenter, filterByRegion);
    
                    area.depot = Model.filter(depots, filterByRegion);
    
                    var form = $('<form></form>').append(t(area));
                    $('#main').html(form);
    
                    // ... //
    
                    var updateDropDown = function(sel, users, depotId) {
                        $(sel).html(t_({
                            user : Model.filter(users, function(item) {
                                return item.depotId == depotId;
                            })
                        }));
                    };

                    updateDropDown('#area-edit-select-callcenter', regionCallcenter, area.depotId);
                    updateDropDown('#area-edit-select-fieldstaff', regionFieldstaff, area.depotId);
    
                    $('select[name="depot"]').change(function(a) {
                        var depotId = $(this).val();
                        updateDropDown('#area-edit-select-callcenter', regionCallcenter, depotId);
                        updateDropDown('#area-edit-select-fieldstaff', regionFieldstaff, depotId);
                     });

                    // ... //
    
                    var u = area.callcenterUser ? area.callcenterUser.id : '';
                    $('select[name="callcenter-user"]').val(u);
    
                    u = area.fieldstaffUser ? area.fieldstaffUser.id : '';
                    $('select[name="fieldstaff-user"]').val(u);
    
                    $('select[name="depot"]').val(area.depotId);
    
                    form.validate({
                        rules: {
                            "name": "required"
                        },
                        submitHandler: function(form) {
    
                            var data = {
                                name     : form['name'].value,
                                depotId  : form['depot'].value || null, 
                                regionId : area.regionId 
                            };
    
                            var user = form['callcenter-user'].value;
                            if (user) {
                                data.callcenterUser = user;
                            }
                            user = form['fieldstaff-user'].value;
                            if (user) {
                                data.fieldstaffUser = user;
                            }
    
                            Storage.process({
                                type        : 'PUT',
                                resource    : '!area/' + id,
                                data        : data,
                                description : 'Edit area "' + area.name + '".',
                                purge       : ['areas', 'users', 'area-users'],
                                hint        : 'The area could not be updated: ', 
                                feedback    : {
                                    'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'An area with the name "' + data.name + '" already exists in the same region.'
                                },
                                complete: function() {
                                    window.location.hash = 'areas';
                                },
                                successMsg: 'Area "' + data.name + '" was successfully updated.'
                            });
    
                        }
                    });
    
                });
    
            });
        });
    },
    deleteArea: function(id) {
        T.render('admin/area/delete', function(t) {

            Model.getArea(id, function(area) {

                $('#main').html(t(area));

                $('button.confirm').click(function() {

                    Storage.process({
                        type        : 'DELETE',
                        resource    : '!area/' + id,
                        data        : '',
                        description : 'Delete area "' + area.name + '".',
                        purge       : ['areas', 'area-users'],
                        hint        : 'Cannot delete area: ',
                        feedback    : {
                            'SQL_FOREIGN_KEY_CONSTRAINT_VIOLATION': 'This area still has <a href="#customers/area/' + id + '">assigned customers</a>.'
                        },
                        complete: function() {
                            window.location.hash = 'areas';
                        },
                        successMsg: 'The area "' + area.name + '" was deleted.'
                    });

                });

            });

        });
    },
    showMaintenanceActivityTypes: function() {
        T.render('admin/maintenance-activity-type/index', function(t) {
            Model.getMaintenanceTypes(function(activityTypes) {
                $('#main').html(t({type: activityTypes}));
            });
        });
    },
    editMaintenanceActivityType: function(id) {
        T.render('admin/maintenance-activity-type/edit', function(t) {
            Model.getMaintenanceType(id, function(activityType) {

                var form = $('<form></form>').append(t(activityType));
                $('#main').html(form);

                form.validate({
                    rules: {
                        "name": "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name: form['name'].value
                        };
    
                        Storage.process({
                            type        : 'PUT',
                            resource    : 'maintenance-activity-type/' + id,
                            data        : data,
                            description : 'Update vehicle maintenance activity type "' + activityType.name + '".',
                            purge       : 'maintenance-types',
                            hint        : 'The maintenance activity type could not be updated: ',
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'An item with the name "' + data.name + '" already exists.'
                            },
                            complete: function() {
                                window.location.hash = 'maintenance-types';
                            },
                            successMsg: 'Vehicle maintenance activity type "' + data.name + '" was updated.'
                        });
    
                    }
                });

            });
        });
    },
    deleteMaintenanceActivityType: function(id) {
        T.render('admin/maintenance-activity-type/delete', function(t) {
            Model.getMaintenanceType(id, function(activityType) {

                var form = $('<form></form>').append(t(activityType));
                $('#main').html(form);

                $('button.confirm').click(function() {
                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'maintenance-activity-type/' + id,
                        data        : '',
                        description : 'Delete vehicle maintenance activity type "' + activityType.name + '".',
                        purge       : 'maintenance-types',
                        hint        : 'Cannot delete maintenance activity type: ',
                        complete: function() {
                            window.location.hash = 'maintenance-types';
                        },
                        successMsg: 'The vehicle maintenance activity type was deleted.'
                    });
                });

            });
        });
    },
    createMaintenanceActivityType: function() {
        T.render('admin/maintenance-activity-type/create', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "name": "required"
                },
                submitHandler: function(form) {

                    var data = {
                        name     : form['name'].value
                    };

                    Storage.process({
                        type        : 'POST',
                        resource    : 'maintenance-activity-type',
                        data        : data,
                        description : 'Create a new vehicle maintenance activity type named "' + data.name + '".',
                        purge       : 'maintenance-types',
                        hint        : 'The vehicle maintenance activity type could not be created: ',
                        feedback    : {
                            'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'An item with the name "' + data.name + '" already exists.'
                        },
                        complete: function() {
                            window.location.hash = 'maintenance-types';
                        },
                        successMsg: 'Maintenance activity type "' + data.name + '" was added to the system.'
                    });

                }
            });

        });
    },
    showCustomersForPriceCat: function(priceCatId) {
        T.render('admin/customer/index', function(t) {

            Model.getPriceCategory(priceCatId, function(priceCategory) {
                Model.getCustomers(function(customers) {

                    // Filter customers by price category
                    var catCustomers = Model.filter(customers, function(item) {
                        return item.priceCatId == priceCatId;
                    });

                    $('#main').html(t({
                        priceCategory : priceCategory,
                        customer      : catCustomers
                    }));

                });
            });

        });
    },
    showCustomersForArea: function(areaId) {
        T.render('admin/customer/index', function(t) {
            
            Model.getArea(areaId, function(area) {
                Model.getCustomers(function(customers) {
    
                    // Filter customers by area id
                    var areaCustomers = Model.filter(customers, function(item) {
                        return item.areaId == areaId;
                    });
    
                    $('#main').html(t({
                        area     : area,
                        customer : areaCustomers
                    }));
    
                });
            });

        });
    },
    showCustomers: function() {
        T.render('admin/customer/index', function(t) {
            
            Model.getCustomers(function(customers) {
                $('#main').html(t({customer: customers}));
            });

        });
    },
    viewCustomer: function(id, tab) {
        T.render('admin/customer/view', function(t) {

            Model.getCustomer(id, function(customer) {
                Model.getOrderAverageForCustomer(id, function(orderAverage) {
                    Model.getAverageOrderTimeInterval(id, function(timeInterval) {

                        customer.averageOrderValue   = orderAverage.average;
                        customer.averageTimeInterval = timeInterval.hours;
 
                        switch (tab) {
                            case 'orders':
                                T.render('admin/order/index', function(t_) {
                                    Model.getOrdersForCustomer(id, function(orders) {

                                        $('#main').html(t(customer));

                                        $('#customer-orders').html(t_({
                                            order: orders
                                        }));

                                    });
                                });
                                break;
                            case 'contacts':
                                T.render('admin/customer/contacts', function(t_) {
                                    Model.getContactsForCustomer(id, function(contacts) {

                                        $('#main').html(t(customer));
                                        customer.contact = contacts;
                                        $('#customer-contacts').html(t_(customer));

                                    });
                                });
                                break;
                            case 'complaints':
                                T.render('admin/complaint/index', function(t_) {
                                    Model.getComplaints(function(complaints) {

                                        $('#main').html(t(customer));

                                        var customerComplaints = Model.filter(complaints, function(item) {
                                            return item.customerId == id;
                                        });

                                        $('#customer-complaints').html(t_({
                                            complaint: customerComplaints
                                        }));

                                    });
                                });
                                break;
                            case 'activity':
                                T.render('admin/customer/activity', function(t_) {
                                    Model.getActivityForCustomer(id, function(activities) {

                                        $('#main').html(t(customer));

                                        _.each(activities, function(act) {
  
                                            switch (act.contactType) {
                                                case 'proactive':
                                                    act.contactType = 'Proactive'
                                                    break;
                                                case 'visit':
                                                    act.contactType = 'Customer Visit'
                                                    break;
                                                case 'customer-received':
                                                    act.contactType = 'Received From Customer'
                                                    break;
                                                default:
                                                    act.contactType = '-';
                                            }

                                            var url = null;
                                            switch (act.kind) {
                                                case 'service-complaint':
                                                case 'quality-complaint':
                                                case 'complaint-resolved':
                                                    url = 'complaint/' + act.entityId;
                                                    break;
                                                default:
                                            }
                                            act.url = url;
                                        });

                                        customer.activity = activities;
                                        $('#customer-activity').html(t_(customer));

                                    });
                                });
                                break;
                            default:
                                $('#main').html(t(customer));
                                break;
                        }

                    });

                });
            });

        });
    },
    editCustomer: function(id) {
        T.render('admin/customer/edit', function(t) {

            Storage.chain(Model.getAreas)
                   .chain(Model.getPriceCategories)
                   .chain(Model.getCustomer(id))
                   .chain(Model.getContactsForCustomer(id))
                   .using(function(areas, priceCategories, customer, contacts) {

                customer.area     = areas;
                customer.priceCat = priceCategories;
                customer.contact  = contacts;

                var form = $('<form></form>').append(t(customer));
                $('#main').html(form);

                $('select[name="area"]').val(customer.areaId);
                $('select[name="price-category"]').val(customer.priceCatId);

                form.validate({
                    rules: {
                        "name"           : "required",
                        "address"        : "required",
                        "latitude"       : "required number",
                        "longitude"      : "required number",
                        "tin"            : "required",
                        "phone"          : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name          : form['name'].value,
                            latitude      : form['latitude'].value,
                            longitude     : form['longitude'].value,
                            tin           : form['tin'].value,
                            phone         : form['phone'].value,
                            address       : form['address'].value,
                            isActive      : form['is-active'].checked,
                            areaId        : form['area'].value,
                            priceCatId    : form['price-category'].value
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : 'customer/' + id,
                            data        : data,
                            description : 'Update customer "' + data.name + '".',
                            purge       : 'customers',
                            complete: function() {
                                window.location.hash = 'customers';
                            },
                            successMsg: 'Customer "' + data.name + '" was successfully updated.'
                        });

                    }
                });

            });

        });
    },
    createCustomer: function() {
        T.render('admin/customer/create', function(t) {

            Storage.chain(Model.getAreas)
                   .chain(Model.getPriceCategories)
                   .using(function(areas, priceCategories) {
   
                var form = $('<form></form>').append(t({
                    priceCategory : priceCategories,
                    area          : areas
                }));

                $('#main').html(form);

                form.validate({
                    rules: {
                        "name"           : "required",
                        "address"        : "required",
                        "latitude"       : "required number",
                        "longitude"      : "required number",
                        "tin"            : "required",
                        "phone"          : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name          : form['name'].value,
                            latitude      : form['latitude'].value,
                            longitude     : form['longitude'].value,
                            tin           : form['tin'].value,
                            phone         : form['phone'].value,
                            address       : form['address'].value,
                            isActive      : form['is-active'].checked,
                            areaId        : form['area'].value,
                            priceCatId    : form['price-category'].value
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : 'customer',
                            data        : data,
                            description : 'Create customer "' + data.name + '".',
                            purge       : 'customers',
                            hint        : 'The customer could not be created: ',
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A customer with the name "' + data.name + '" already exists.'
                            },
                            complete: function() {
                                window.location.hash = 'customers';
                            },
                            successMsg: 'Customer "' + data.name + '" was successfully created.'
                        });

                    }
                });

            });

        });
    },
    createCustomerContact: function(customerId) {
        T.render('admin/contact/create', function(t) {

            Storage.chain(Model.getContactTypes)
                   .chain(Model.getCustomer(customerId))
                   .using(function(contactTypes, customer) {
    
                customer.contactType = contactTypes;

                var form = $('<form></form>').append(t(customer));
    
                $('#main').html(form);

                form.validate({
                    rules: {
                        "kind"  : "required",
                        "datum" : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            kind        : form['kind'].value,
                            datum       : form['datum'].value, 
                            meta        : form['meta'].value
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : 'contact/customer/' + customerId,
                            data        : data,
                            description : 'Create a new customer contact for customer "' + customer.name + '".',
                            purge       : ['customers', 'contacts-customer-' + customerId],
                            hint        : 'The customer contact could not be created: ',
                            complete: function() {
                                window.location.hash = 'customer/' + customerId;
                            },
                            successMsg: 'The customer contact information was added to customer "<a href="#customer/' + customerId + '">' + customer.name + '</a>".'
                        });
                    }
                });
    
            });

        });
    },
    editCustomerContact: function(id) {
        T.render('admin/contact/edit', function(t) {

            Storage.chain(Model.getContactTypes)
                   .chain(Model.getContact(id))
                   .using(function(contactTypes, contact) {

                var customerId = contact.customerId;

                contact.contactType = contactTypes;

                var form = $('<form></form>').append(t(contact));
                $('#main').html(form);

                form.validate({
                    rules: {
                        "kind"  : "required",
                        "body"  : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            kind       : form['kind'].value,
                            datum      : form['datum'].value, 
                            meta       : form['meta'].value
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : 'contact/' + id + '/customer/' + customerId,
                            data        : data,
                            description : 'Edit customer contact for customer "' + contact.customerName + '".',
                            purge       : ['contact-' + id, 'contacts-customer-' + customerId],
                            hint        : 'The customer contact could not be updated: ',
                            complete: function() {
                                window.location.hash = 'customer/' + customerId;
                            },
                            successMsg: 'The customer contact information was updated for customer "<a href="#customer/' + customerId + '">' + contact.customerName + '</a>".'
                        });

                    }
                });

            });

        });
    },
    deleteCustomerContact: function(id) {
        T.render('admin/contact/delete', function(t) {
            Model.getContact(id, function(contact) {

                var form = $('<form></form>').append(t(contact));
                $('#main').html(form);

                $('button.confirm').click(function() {
                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'contact/' + id + '/customer/' + contact.customerId,
                        data        : '',
                        description : 'Delete contact for customer "' + contact.customerName + '".',
                        purge       : ['customers', 'contacts-customer-' + contact.customerId],
                        hint        : 'Cannot delete contact: ',
                        complete: function() {
                            window.location.hash = 'customer/' + contact.customerId;
                        },
                        successMsg: 'The customer contact information was deleted.'
                    });
                });

            });
        });
    },
    showCustomerActivity: function(customerId) {
        T.render('admin/customer/activity', function(t) {

            Model.getCustomer(customerId, function(customer) {
                Model.getActivityForCustomer(customerId, function(activities) {

                    customer.activity = activities;
                    $('#main').html(t(customer));

                });
            });

        });
    },
    showComplaints: function() {
        T.render('admin/complaint/index', function(t) {
            Model.getComplaints(function(complaints) {
                $('#main').html(t({complaint: complaints}));
            });
        });
    },
    showComplaintsForCustomer: function(customerId) {
        T.render('admin/complaint/customer', function(t) {
            Model.getCustomer(customerId, function(customer) {
                Model.getComplaints(function(complaints) {
    
                    var customerComplaints = Model.filter(complaints, function(item) {
                        return item.customerId == customerId;
                    });

                    $('#main').html(t({
                        customer  : customer, 
                        complaint : customerComplaints
                    }));
    
                });
            });
        });
    },
    viewComplaint: function(id) {
        T.render('admin/complaint/view', function(t) {
            T.render('admin/complaint/products', function(t_) {
                Model.getComplaint(id, function(complaint) {

                    $('#main').html(t(complaint));

                    if ('quality' === complaint.kind) {
                        $('#main').append(t_(complaint));
                    }
    
                    $('button.resolve').click(function() {
    
                        var date = new Date();

                        Storage.process({
                            type        : 'PATCH',
                            resource    : '!complaint/resolve/' + id,
                            data        : {
                                datetime    : date.toISOString(),
                                customerId  : complaint.customerId,
                                userId      : App.user().id,
                                description : 'Complaint was resolved.'
                            },
                            description : 'Resolve complaint from customer "' + complaint.customer + '".',
                            purge       : 'complaints',
                            complete    : App.refresh
                        });
    
                    });

                });
            });
        });
    },
    showDamageTypes: function() {
        T.render('admin/stock-damage-type/index', function(t) {
            Model.getDamageTypes(function(damageTypes) {
                $('#main').html(t({item: damageTypes}));
            });
        });
    },
    editDamageType: function(id) {
        T.render('admin/stock-damage-type/edit', function(t) {
            Model.getDamageType(id, function(damageType) {

                var form = $('<form></form>').append(t(damageType));
                $('#main').html(form);

                form.validate({
                    rules: {
                        "name"  : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name : form['name'].value
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : 'stock-damage-type/' + id,
                            data        : data,
                            description : 'Edit stock damage type: "' + data.name + '".',
                            purge       : 'stock-damage-types',
                            hint        : 'The stock damage type could not be updated: ',
                            complete: function() {
                                window.location.hash = 'damage-types';
                            },
                            successMsg: 'Stock damage type "' + data.name + '" was updated.'
                        });

                    }
                });

            });
        });
    },
    deleteDamageType: function(id) {
        T.render('admin/stock-damage-type/delete', function(t) {
            Model.getDamageType(id, function(damageType) {

                var form = $('<form></form>').append(t(damageType));
                $('#main').html(form);

                $('button.confirm').click(function() {
                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'stock-damage-type/' + id,
                        data        : '',
                        description : 'Delete stock damage type "' + damageType.name + '".',
                        purge       : 'stock-damage-types',
                        hint        : 'Cannot delete damage type: ',
                        complete: function() {
                            window.location.hash = 'damage-types';
                        },
                        successMsg: 'Stock damage type "' + damageType.name + '" was deleted.'
                    });
                });

            });
        });
    },
    createDamageType: function() {
        T.render('admin/stock-damage-type/create', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "name"  : "required"
                },
                submitHandler: function(form) {

                    var data = {
                        name : form['name'].value
                    };

                    Storage.process({
                        type        : 'POST',
                        resource    : 'stock-damage-type',
                        data        : data,
                        description : 'Create stock damage type: "' + data.name + '".',
                        purge       : 'stock-damage-types',
                        hint        : 'The stock damage type could not be created: ',
                        complete: function() {
                            window.location.hash = 'damage-types';
                        },
                        successMsg: 'Stock damage type "' + data.name + '" was added.'
                    });

                }
            });

        });
    },
    showStockActivity: function(depotId) {
        T.render('admin/stock/activity', function(t) {

            Model.getStockActivityForDepot(depotId, function(activity) {
            
                _.each(activity, function(act) {
                    act.type = Model.readableStockActType(act.activityType);
                });

                $('#main').html(t({
                    activity: activity
                }));

            });

        });
    },
    manageStock: function(depotId) {
        T.render('admin/stock/depot-select', function(t) {
            T.render('admin/stock/summary', function(t_) {

                Model.getDepots(function(depots) {

                    $('#main').html(t({depot: depots}));

                    $('select[name="stock-depot-select"]').on('change', function() {
                        if (this.value) {
                            window.location.hash = 'stock/depot/' + this.value;
                        }
                    });
    
                    if (depotId) {
                        Storage.find(depotId, depots, function(depot) {

                            // Temporarily disable onRequestBegin hook
                            var callback = App.onRequestBegin;
                            App.onRequestBegin = function() {};

                            $('#stock-summary').empty();

                            Model.getStockForDepot(depotId, function(stock) {
                                $('#stock-summary').html(t_({
                                    depotId  : depotId, 
                                    depot    : depot,
                                    item     : stock
                                }));
                                App.onRequestBegin = callback;
                            });

                        });

                        $('select[name="stock-depot-select"]').val(depotId);

                    } else {
                        $('#stock-summary').empty();
                    }

                });
            });
        });
    },
    addStockToDepot: function(depotId) {
        T.render('admin/stock/add', function(t) {
            
            Storage.chain(Model.getProducts)
                   .chain(Model.getDepot(depotId))
                   .using(function(products, depot) {

                var form = $('<form></form>').append(t({
                    product : products,
                    depot   : depot
                }));

                $('#main').html(form);

                form.validate({
                    rules: {
                        "quantity" : "required number"
                    },
                    submitHandler: function(form) {
    
                        var productId = $('select[name="product"]').val();

                        Storage.find(productId, products, function(product) {

                            var data = {
                                quantity  : form['quantity'].value,
                                productId : productId,
                                type      : 'incoming'
                            };
        
                            Storage.process({
                                type        : 'PATCH',
                                resource    : '!stock/add/depot/' + depotId,
                                data        : data,
                                description : 'Add incoming stock for product "' + product.name + '" in "' + depot.name + '".',
                                purge       : ['stock-' + depotId, 'stock-activity'],
                                hint        : 'Product stock could not be added: ',
                                complete: function() {
                                    window.location.hash = 'stock/depot/' + depotId;
                                },
                                successMsg: 'Product stock was successfully added to "' + depot.name + '".'
                            });

                        });
    
                    }

                });

            });

        });
    },
    adjustStockForDepot: function(depotId) {
        T.render('admin/stock/adjust', function(t) {

            Storage.chain(Model.getProducts)
                   .chain(Model.getDepot(depotId))
                   .chain(Model.getStockForDepot(depotId))
                   .using(function(products, depot, stock) {

                var form = $('<form></form>').append(t({
                    product : products,
                    depot   : depot
                }));
 
                $('#main').html(form);

                var productStock = Storage.toMap(stock, 'productId');

                _.each(products, function(product) {

                    var qty = 0;
                    if (productStock.hasOwnProperty(product.id)) {
                        qty = productStock[product.id].actual;
                    }
                    $('input[name="product-' + product.id + '"]').val(qty);

                });

                form.validate({
                    submitHandler: function(form) {

                        // Identify all fields for which the stock amount has been 
                        // modified by the user.

                        var pos = [];
                        var neg = [];

                        _.each(products, function(product) {
                            var qty = 0;
                            if (productStock.hasOwnProperty(product.id)) {
                                qty = productStock[product.id].actual;
                            }
                            var qty_ = $('input[name="product-' + product.id + '"]').val();

                            if (qty < qty_) {

                                pos.push({
                                    quantity  : (qty_ - qty),
                                    productId : product.id,
                                    type      : 'adjustment_pos'
                                });

                            } else if (qty > qty_) {

                                neg.push({
                                    quantity  : (qty - qty_),
                                    productId : product.id,
                                    type      : 'adjustment_neg'
                                });

                            }

                        });

                        var next = function() {
                            if (neg.length) {

                                Storage.process({
                                    type        : 'PATCH',
                                    resource    : '!stock/remove/depot/' + depotId,
                                    data        : neg,
                                    description : 'Product stock adjustment on depot "' + depot.name + '".',
                                    purge       : ['stock-' + depotId, 'stock-activity'],
                                    hint        : 'Product stock adjustment failed: ',
                                    complete: function() {
                                        window.location.hash = 'stock/depot/' + depotId;
                                    },
                                    successMsg: 'Product stock was successfully adjusted on "' + depot.name + '".'
                                });

                            } else {
                                App.notify('Product stock was successfully adjusted on "' + depot.name + '".');
                                window.location.hash = 'stock/depot/' + depotId;
                            }
                        };

                        if (pos.length) {

                            Storage.process({
                                type        : 'PATCH',
                                resource    : '!stock/add/depot/' + depotId,
                                data        : pos,
                                description : 'Product stock adjustment on depot "' + depot.name + '".',
                                purge       : ['stock-' + depotId, 'stock-activity'],
                                hint        : 'Product stock adjustment failed: ',
                                success     : next
                            });

                        } else {
                            next();
                        }

                    }
                });

            });

        });
    },
    viewStockDamageReport: function(activityId) {
        T.render('admin/stock/damage-report', function(t) {

            Model.getStockActivity(function(activity) {
                Storage.find(activityId, activity, function(res) {
                    $('#main').html(t(res));
                });
            });

        });
    },
    depot_showAvailableVehicles: function() {
        T.render('depot/queueing/vehicles', function(t) {

            Model.getDepotForCurrentUser(function(depotId) {
                Model.getVehiclesForDepot(depotId, function(vehicles) {
    
                    var availableVehicles = Model.filter(vehicles, function(item) {
                        return item.isAvailable;
                    });
        
                    $('#main').html(t({
                        vehicle: availableVehicles
                    }));
        
                });
            });

        });
    },
    reportDamagedStockForDepot: function(depotId) {
        T.render('admin/stock/report', function(t) {

            Storage.chain(Model.getProducts)
                   .chain(Model.getDepot(depotId))
                   .chain(Model.getDamageTypes)
                   .using(function(products, depot, types) {

                var form = $('<form></form>').append(t({
                    product : products,
                    depot   : depot,
                    type    : types
                }));

                $('#main').html(form);

                form.validate({
                    rules: {
                        "quantity" : "required number"
                    },
                    submitHandler: function(form) {
    
                        var productId = $('select[name="product"]').val(),
                            typeId = $('select[name="type"]').val();

                        Storage.find(productId, products, function(product) {

                            var data = {
                                quantity    : form['quantity'].value,
                                productId   : productId,
                                type        : 'damage',
                                damageType  : types[typeId].name,
                                description : $('textarea[name="comment"]').val(),
                            };

                            Storage.process({
                                type        : 'PATCH',
                                resource    : '!stock/report-damage/depot/' + depotId,
                                data        : data,
                                description : 'Report damaged stock for product "' + product.name + '" in "' + depot.name + '".',
                                purge       : ['stock-' + depotId, 'stock-activity'],
                                hint        : 'Product stock damage could not be reported: ',
                                complete: function() {
                                    window.location.hash = 'stock/depot/' + depotId;
                                },
                                successMsg: 'Damaged product stock was reported for "' + depot.name + '".'
                            });
    
                        });

                    }
                });
    
            });

        });
    },
    showVehiclesForDepot: function(depotId) {
        T.render('admin/vehicle/index', function(t) {
            Model.getDepot(depotId, function(depot) {
                Model.getVehicles(function(vehicles) {

                    var depotVehicles = Model.filter(vehicles, function(item) {
                        return item.depotId == depotId;
                    });
    
                    $('#main').html(t({
                        depot   : depot,
                        vehicle : depotVehicles
                    }));
    
                });
            });
        });
    },
    showVehiclesInWeightClass: function(classId) {
        T.render('admin/vehicle/index', function(t) {

            Model.getWeightClass(classId, function(weightClass) {
                Model.getVehicles(function(vehicles) {

                    var catVehicles = Model.filter(vehicles, function(item) {
                        return item.weightCatId == classId;
                    });

                    $('#main').html(t({vehicle: catVehicles}));
 
                });
            });

        });
    },
    showVehicles: function() {
        T.render('admin/vehicle/index', function(t) {
            Model.getVehicles(function(vehicles) {
                $('#main').html(t({vehicle: vehicles}));
            });
        });
    },
    editVehicle: function(id) {
        T.render('admin/vehicle/edit', function(t) {

            Storage.chain(Model.getVehicle(id))
                   .chain(Model.getDepots)
                   .chain(Model.getWeightClasses)
                   .using(function(vehicle, depots, weightClasses) {

                vehicle.weightClass = weightClasses;
                vehicle.depot       = depots;

                var form = $('<form></form>').append(t(vehicle));

                $('#main').html(form);
    
                $('select[name="weight-class"]').val(vehicle.weightCatId);
                $('select[name="depot"]').val(vehicle.depotId);

                if ('active' === vehicle.status) {
                    $('input[name="active"]').attr('checked', 'checked');
                }
 
                form.validate({
                    rules: {
                        "reg-no" : "required",
                        "make"   : "required",
                        "model"  : "required"
                    },
                    submitHandler: function(form) {
    
                        var data = {
                            'regNo'       : form['reg-no'].value,
                            'make'        : form['make'].value,
                            'model'       : form['model'].value,
                            'categoryId'  : form['weight-class'].value,
                            'depotId'     : form['depot'].value,
                            'status'      : $('input[name="active"]:checked').val() ? 'active' : 'inactive',
                            'isAvailable' : vehicle.isAvailable,
                            'userId'      : vehicle.userId || null
                        };
    
                        Storage.process({
                            type        : 'PUT',
                            resource    : 'vehicle/' + id,
                            data        : data,
                            description : 'Update vehicle: "' + data.regNo + '".',
                            purge       : 'vehicles',
                            hint        : 'The vehicle could not be updated: ',
                            complete: function() {
                                window.location.hash = 'vehicles';
                            },
                            successMsg: 'Vehicle "' + data.regNo + '" was updated.'
                        });
        
                    }
                });
            });
        });
    },
    deleteVehicle: function(id) {
        T.render('admin/vehicle/delete', function(t) {

            Model.getVehicle(id, function(vehicle) {

                $('#main').html(t(vehicle));

                $('button.confirm').click(function() {

                    Storage.process({
                        type        : 'DELETE',
                        resource    : '!vehicle/' + id,
                        data        : '',
                        description : 'Delete vehicle "' + vehicle.regNo + '".',
                        purge       : 'vehicles',
                        hint        : 'Cannot delete vehicle: ',
                        complete: function() {
                            window.location.hash = 'vehicles';
                        },
                        successMsg: 'Vehicle "' + vehicle.regNo + '" was removed from the system.'
                    });

                });

            });

        });
    },
    createVehicle: function() {
        T.render('admin/vehicle/create', function(t) {
            Model.getDepots(function(depots) {
                Model.getWeightClasses(function(weightClasses) {

                    var form = $('<form></form>').append(t({
                        weightClass : weightClasses,
                        depot       : depots
                    }));

                    $('#main').html(form);
        
                    form.validate({
                        rules: {
                            "reg-no" : "required",
                            "make"   : "required",
                            "model"  : "required"
                        },
                        submitHandler: function(form) {

                            var data = {
                                'regNo'       : form['reg-no'].value,
                                'make'        : form['make'].value,
                                'model'       : form['model'].value,
                                'categoryId'  : form['weight-class'].value,
                                'depotId'     : form['depot'].value,
                                'status'      : $('input[name="active"]:checked').val() ? 'active' : 'inactive',
                                'isAvailable' : true,
                                'userId'      : null
                            };
        
                            Storage.process({
                                type        : 'POST',
                                resource    : 'vehicle',
                                data        : data,
                                description : 'Create vehicle: "' + data.regNo + '".',
                                purge       : 'vehicles',
                                hint        : 'The vehicle could not be created: ',
                                complete: function() {
                                    window.location.hash = 'vehicles';
                                },
                                successMsg: 'Vehicle "' + data.regNo + '" was successfully created.'
                            });
        
                        }
                    });

                });
            });
        });
    },
    viewVehicle: function(id) {
        T.render('admin/vehicle/view', function(t) {
            Model.getVehicle(id, function(vehicle) {

                $('#main').html(t(vehicle));

            });
        });
    },
    showPriceCategories: function() {
        T.render('admin/price-category/index', function(t) {
            Model.getPriceCategories(function(priceCategories) {
                $('#main').html(t({category: priceCategories}));
            });
        });
    },
    editPriceCategory: function(id) {
        T.render('admin/price-category/edit', function(t) {
            Model.getPriceCategory(id, function(priceCategory) {

                var form = $('<form></form>').append(t(priceCategory));
                $('#main').html(form);

                form.validate({
                    rules: {
                        "name": "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name: form['name'].value
                        };
    
                        Storage.process({
                            type        : 'PUT',
                            resource    : 'price-category/' + id,
                            data        : data,
                            description : 'Update product price category "' + priceCategory.name + '".',
                            purge       : ['price-categories', 'products'],
                            hint        : 'The product price category could not be updated: ',
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A category with the name "' + data.name + '" already exists.'
                            },
                            complete: function() {
                                window.location.hash = 'price-categories';
                            },
                            successMsg: 'Price category "' + data.name + '" was updated.'
                        });
    
                    }
                });

            });
        });
    },
    deletePriceCategory: function(id) {
        T.render('admin/price-category/delete', function(t) {
            Model.getPriceCategory(id, function(priceCategory) {

                var form = $('<form></form>').append(t(priceCategory));
                $('#main').html(form);

                $('button.confirm').click(function() {
                    Storage.process({
                        type        : 'DELETE',
                        resource    : '!price-category/' + id,
                        data        : '',
                        description : 'Delete product price category "' + priceCategory.name + '".',
                        purge       : ['price-categories', 'products'],
                        hint        : 'Cannot delete price category: ',
                        feedback    : {
                            'SQL_FOREIGN_KEY_CONSTRAINT_VIOLATION': '<a href="#customers/category/' + id + '">Customers are currently assigned</a> to the price category "' + priceCategory.name + '".'
                        },
                        complete: function() {
                            window.location.hash = 'price-categories';
                        },
                        successMsg: 'The product price category was deleted.'
                    });
                });

            });
        });
    },
    createPriceCategory: function() {
        T.render('admin/price-category/create', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "name": "required"
                },
                submitHandler: function(form) {

                    var data = {
                        name: form['name'].value
                    };

                    Storage.process({
                        type        : 'POST',
                        resource    : 'price-category',
                        data        : data,
                        description : 'Create a new product price category named "' + data.name + '".',
                        purge       : ['price-categories', 'products'],
                        hint        : 'The product price category could not be created: ',
                        feedback    : {
                            'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A category with the name "' + data.name + '" already exists.'
                        },
                        complete: function() {
                            window.location.hash = 'price-categories';
                        },
                        successMsg: 'Price category "' + data.name + '" was created.'
                    });

                }
            });

        });
    },
    showProducts: function() {
        T.render('admin/product/index', function(t) {

            Storage.chain(Model.getPriceCategories)
                   .chain(Model.getActiveProducts)
                   .using(function(priceCategories, products) {

                var complete = Model.filter(products, function(product) {
                    return product.incomplete == false;
                });
 
                $('#main').html(t({
                    product  : complete,
                    category : priceCategories
                }));

                $('.product-delete').click(function() {

                    var productId = $(this).data('id');

                    Model.getProduct(productId, function(product) {
                        Storage.process({
                            type        : 'DELETE',
                            resource    : 'product/' + productId,
                            data        : '',
                            description : 'Delete product "' + product.name + '".',
                            purge       : 'products',
                            hint        : 'Cannot delete product: ',
                            complete: function() {
                                window.location.hash = 'products';
                                App.refresh();
                            },
                            successMsg: 'Product "' + product.name + '" was deleted. <a href="#products/recover">Recover deleted products</a>.'
                        });
                    });

                });

            });

        });
    },
    showDeletedProducts: function() {
        T.render('admin/product/recover', function(t) {
            Model.getDeletedProducts(function(products) {

                $('#main').html(t({product: products}));

                $('.product-recover').click(function() {

                    var productId = $(this).data('id');

                    Model.getProduct(productId, function(product) {
                        Storage.process({
                            type        : 'PATCH',
                            resource    : 'product/recover/' + productId,
                            data        : '',
                            description : 'Recover product "' + product.name + '".',
                            purge       : 'products',
                            hint        : 'Cannot recover product: ',
                            complete: function() {
                                window.location.hash = 'products';
                            },
                            successMsg: 'Product "' + product.name + '" was recovered.'
                        });
                    });

                });

            });
        });
    },
    showIncompleteProducts: function() {
        T.render('admin/product/index', function(t) {

            Model.getProducts(function(products) {

                var incompleteProducts = Model.filter(products, function(product) {
                    return product.incomplete == true;
                });
                
                $('#main').html(t({
                    product  : incompleteProducts
                }));

            });

        });
    },
    editProduct: function(id) {
        T.render('admin/product/edit', function(t) {

            Storage.chain(Model.getProduct(id))
                   .chain(Model.getPriceCategories)
                   .chain(Model.getWeightClasses)
                   .using(function(product, priceCategories, weightClasses) {

                product.priceCategory  = priceCategories;
                product.weightCategory = weightClasses;

                var form = $('<form></form>').append(t(product));
                $('#main').html(form);

                var rules = {
                    "name"        : "required",
                    "unit-size"   : "required",
                    "description" : "required"
                };

                // Add validation rules for each price item
                _.each(priceCategories, function(cat) {
                    rules['price-' + cat.id] = "required number";
                    // Populate form with current value
                    if (product.category && product.category.hasOwnProperty(cat.id)) {
                        $('input[name="price-' + cat.id + '"]').val(product.category[cat.id].price);
                    }
                });
                
                // Add validation rules for each load limit
                _.each(weightClasses, function(cat) {
                    rules['limit-' + cat.id] = "required digits";
                    // Populate form with current value
                    if (product.limit && product.limit.hasOwnProperty(cat.id)) {
                        $('input[name="limit-' + cat.id + '"]').val(product.limit[cat.id].limit);
                    }
                });

                if (product.deleted == true) {
                    $('input[name="deleted"]').attr('checked', 'checked');
                }
 
                form.validate({
                    rules: rules,
                    submitHandler: function(form) {

                        var limits = [];
                        var prices = [];

                        _.each($('input[name^="limit"]'), function(el) {
                            limits.push({
                                categoryId : $(el).data('id'),
                                limit      : el.value
                            });
                        });

                        _.each($('input[name^="price"]'), function(el) {
                            prices.push({
                                priceCatId : $(el).data('id'),
                                price      : el.value
                            });
                        });

                        var data = {
                            name        : form['name'].value,
                            unitSize    : form['unit-size'].value,
                            description : form['description'].value,
                            deleted     : $('input[name="deleted"]:checked').val() ? true : false,
                            limits      : limits,
                            prices      : prices
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : '!product/' + id,
                            data        : data,
                            description : 'Update product: "' + data.name + '".',
                            purge       : 'products',
                            hint        : 'The product could not be updated: ',
                            complete: function() {
                                window.location.hash = 'products';
                            },
                            successMsg: 'The product "' + data.name + '" was updated.'
                        });
    
                    }
                });

            });

        });
    },
    createProduct: function() {
        T.render('admin/product/create', function(t) {

            Storage.chain(Model.getPriceCategories)
                   .chain(Model.getWeightClasses)
                   .using(function(priceCategories, weightClasses) {

                var form = $('<form></form>').append(t({
                    priceCategory  : priceCategories,
                    weightCategory : weightClasses
                }));
    
                $('#main').html(form);
    
                var rules = {
                    "name"        : "required",
                    "unit-size"   : "required",
                    "description" : "required"
                };

                // Add validation rules for each price item
                _.each(priceCategories, function(cat) {
                    rules['price-' + cat.id] = "required number";
                });
                
                // Add validation rules for each load limit
                _.each(weightClasses, function(cat) {
                    rules['limit-' + cat.id] = "required digits";
                });

                form.validate({
                    rules: rules,
                    submitHandler: function(form) {
    
                        var limits = [];
                        var prices = [];

                        _.each($('input[name^="limit"]'), function(el) {
                            limits.push({
                                categoryId : $(el).data('id'),
                                limit      : el.value
                            });
                        });

                        _.each($('input[name^="price"]'), function(el) {
                            prices.push({
                                priceCatId : $(el).data('id'),
                                price      : el.value
                            });
                        });

                        var data = {
                            name        : form['name'].value,
                            unitSize    : form['unit-size'].value,
                            description : form['description'].value,
                            prices      : prices,
                            limits      : limits 
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : '!product',
                            data        : data,
                            description : 'Create new product: "' + data.name + '".',
                            purge       : 'products',
                            hint        : 'The product could not be created: ',
                            complete: function() {
                                window.location.hash = 'products';
                            },
                            successMsg: 'The product "' + data.name + '" was successfully created.'
                        });
    
                    }
                });

            });
        });
    },
    viewProduct: function(id) {
        T.render('admin/product/view', function(t) {
            Model.getProduct(id, function(product) {

                $('#main').html(t(product));

            });
        });
    },
    showWeightClasses: function() {
        T.render('admin/weight-category/index', function(t) {
            Model.getWeightClasses(function(weightClasses) {
                $('#main').html(t({category: weightClasses}));
            });
        });
    },
    editWeightClass: function(id) {
        T.render('admin/weight-category/edit', function(t) {
            Model.getWeightClass(id, function(weightClass) {

                var form = $('<form></form>').append(t(weightClass));
                $('#main').html(form);
    
                form.validate({
                    rules: {
                        "name"  : "required"
                    },
                    submitHandler: function(form) {
    
                        var data = {
                            name : form['name'].value
                        };
    
                        Storage.process({
                            type        : 'PUT',
                            resource    : 'weight-category/' + id,
                            data        : data,
                            description : 'Update vehicle weight category: "' + data.name + '".',
                            purge       : ['weight-categories', 'products'],
                            hint        : 'The vehicle weight category could not be updated: ',
                            complete: function() {
                                window.location.hash = 'weight-classes';
                            },
                            successMsg: 'Vehicle weight category "' + data.name + '" was updated.'
                        });
    
                    }
                });

            });
        });
    },
    deleteWeightClass: function(id) {
        T.render('admin/weight-category/delete', function(t) {
            Model.getWeightClass(id, function(weightClass) {

                var form = $('<form></form>').append(t(weightClass));
                $('#main').html(form);

                $('button.confirm').click(function() {
                    Storage.process({
                        type        : 'DELETE',
                        resource    : '!weight-category/' + id,
                        data        : '',
                        description : 'Delete vehicle weight category "' + weightClass.name + '".',
                        purge       : ['weight-categories', 'products'],
                        hint        : 'Cannot delete vehicle weight category: ',
                        feedback    : {
                            'SQL_FOREIGN_KEY_CONSTRAINT_VIOLATION': '<a href="#vehicles/weight-class/' + id + '">Vehicles are currently assigned</a> to "' + weightClass.name + '".'
                        },
                        complete: function() {
                            window.location.hash = 'weight-classes';
                        },
                        successMsg: 'The vehicle weight category was deleted.'
                    });
                });

            });
        });
    },
    createWeightClass: function() {
        T.render('admin/weight-category/create', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "name"  : "required"
                },
                submitHandler: function(form) {

                    var data = {
                        name : form['name'].value
                    };

                    Storage.process({
                        type        : 'POST',
                        resource    : 'weight-category',
                        data        : data,
                        description : 'Create vehicle weight category: "' + data.name + '".',
                        purge       : ['weight-categories', 'products'],
                        hint        : 'The vehicle weight category could not be created: ',
                        complete: function() {
                            window.location.hash = 'weight-classes';
                        },
                        successMsg: 'Vehicle weight category "' + data.name + '" was added.'
                    });

                }
            });

        });
    },
    showOrders: function() {
        T.render('admin/order/index', function(t) {

            Model.getOrders(function(orders) {
                $('#main').html(t({order: orders}));
            });

        });
    },
    showOrdersForCustomer: function(customerId) {
        T.render('admin/order/index', function(t) {

            Model.getOrders(function(orders) {
                var customerOrders = Model.filter(orders, function(item) {
                    return item.customerId == customerId;
                });

                $('#main').html(t({order: customerOrders}));

            });

        });
    },
    showOrderActivityLog: function(orderId) {
        T.render('admin/order/log', function(t) {
            Model.getOrderActivity(orderId, function(activities) {

                _.each(activities, function(activity) {
                    activity.statusName = Model.readableOrderStatus(activity.status);
                });

                $('#main').html(t({activity: activities}));

            });
        });
    },
    viewOrder: function(id) {
        T.render('admin/order/view', function(t) {

            Model.getOrders(function(orders) {
                Storage.find(id, orders, function(order) {
                    Model.getProductsForOrder(id, function(products) { 

                        order.product = products;
                        $('#main').html(t(order));

                    });
                });
            });

        });
    },
    editOrder: function(id) {

            Model.getOrder(id, function(order) {
            Model.getProductsForOrder(id, function(orderProducts) { 
            Model.getCustomer(order.customerId, function(customer) {

                Model.getProducts(function(products) {

                    T.render('fieldstaff/order/create', function(t_) {
                        T.render('fieldstaff/order/product', function(t__) {

                            var depotId = order.depotId;

                            if (!depotId) {
                                alert('No order depot.');
                                // ?
                                return;
                            }

                                                                var form = $('<form></form>');
                                                                form.append(t_({product: products}));
                                                                $('#main').html(form);
    
                                                                var selected = [];

                                                                var productBasket = {};

                                                                _.each(orderProducts, function(product) {
                                                                    productBasket[product.id] = product.quantity;
                                                                    $('#order-products tbody').append(t__(product));
                                                                });

                                                                var update = function(quantity, productId, callback) {
                                                                        
//                                                                        var product = products[productId];

                                                                        //
    
                                                                        Storage.process({
                                                                            type        : 'GET',
                                                                            resource    : '/stock/product/' + productId + '/depot/' + depotId,
                                                                            success     : function(resp) {
    
                                                                                var available = resp.available;
    
                                                                                var qts = [];
                                                                                var products = [];
        
                                                                                $('.order-product-quantity').each(function(item) {
                                                                                    products.push($(this).data('id'));
                                                                                    qts.push(Number($(this).val()));
                                                                                });
    
                                                                                products.push(Number(productId));
                                                                                qts.push(quantity);
    
                                                                                Storage.process({
                                                                                       type        : 'POST',
                                                                                       resource    : '/calculate-least-weight',
                                                                                       data        : {qts: qts, products: products},
                                                                                       success     : function(resp) {
                                                                                           callback(resp.weight, available);
                                                                                       }
                                                                                });
    
                                                                                //$('input[name="prod-' + productId + '-quantity"]').rules('add', {
                                                                                //    'required' : true,
                                                                                //    digits     : true,
                                                                                //    min        : 1,
                                                                                //    max        : resp.available
                                                                                //});
    
                                                                            }
                                                                        });
     
    
                                                                    };







                                                                $('#order-add-product').click(function() {


                                                                    var productId = $('#order-product-select').val(),
                                                                        product = products[productId];

                                                                    var quantity = Number($('#order-item-add-quantity').val());

                                                                    $('#order-item-add-quantity').val(1);

                                                                    update(quantity, productId, function(weight, available) {


                                                                        if (quantity <= available && weight <= 1) {

                                                                            product.quantity = quantity;

                                                                            $('#order-products tbody').append(t__(product));
                                                                            $('#order-product-select option[value="' + productId + '"]').remove();
            
                                                                            //$('input[name="prod-' + productId + '-quantity"]').rules('add', 'required digits');
            
                                                                            selected.push(productId);

                                                                            var price = product.category[customer.priceCatId].price * quantity;

                                                                            $('#prod-' + productId + '-sub-total').html(price);

                                                                            productBasket[productId] = quantity;

                                                                        } else {
                                                                            var element = $('#order-product-select').parent();
                                                                            if (quantity > available) {
                                                                                element.append('Insufficient stock quantity available.');
                                                                            } else {
                                                                                element.append('The selected quantity is too large for any available vehicle.');
                                                                            }
                                                                        }

                                                                    });

                                                                    return false;

                                                                });
                                                               

                                                                            $('#order-products').on('click', '.order-product-qty-edit', function() {
                                                                                $(this).parent().hide();
                                                                                $(this).parent().parent().find('div').first().show();
                                                                            });

                                                                            $('#order-products').on('click', '.product-remove', function() {

                                                                                var pid = $(this).data('id');
                                                                                var product = products[pid];

                                                                                $(this).parent().parent().remove();
                                                                                $('#order-product-select').append('<option value="' + pid + '">' + product.name + '</option>');

                                                                                delete productBasket[pid];

                                                                            });

                                                                            $('#order-products').on('click', '.order-product-qty-update', function() {


                                                                                var productId = Number($(this).data('id')),
                                                                                    quantity  = Number($('#prod-' + productId + '-quantity').val()),
                                                                                    t = $(this);
                                                                                
                                                                                update(quantity, productId, function(weight, available) {
           
                                                                                    if (quantity <= available && weight <= 1) {

                                                                                        $('#prod-' + productId + '-quantity-text').html($('#prod-' + productId + '-quantity').val());

                                                                                        $(this).parent().hide();
                                                                                        $(this).parent().parent().find('div').first().next().show();

                                                                                        var product = products[productId];

                                                                                        var price = product.category[customer.priceCatId].price * quantity;
                                                                                        $('#prod-' + productId + '-sub-total').html(price);

                                                                                        productBasket[productId] = quantity;


                                                                                    } else {
                                                                                        if (quantity > available) {
                                                                                            $('#prod-' + productId + '-sub-total').html('Insufficient stock quantity available.');
                                                                                        } else {
                                                                                            $('#prod-' + productId + '-sub-total').html('The selected quantity is too large for any available vehicle.');
                                                                                        }
                                                                                    }
            
                                                                                }.bind(this));


                                                                             });

    
                                                                //$('.product-remove').on('click', function() {
                                                                //    alert('x');
                                                                //});
    
                                                                form.validate({
                                                                    submitHandler: function(form) {
    
                                                                        var qts = [];
                                                                        var products = [];

                                                                        $('.order-product-quantity').each(function(item) {
                                                                            products.push($(this).data('id'));
                                                                            qts.push(Number($(this).val()));
                                                                        });

                                                                        Storage.process({
                                                                               type        : 'POST',
                                                                               resource    : '/calculate-least-weight',
                                                                               data        : {qts: qts, products: products},
                                                                               success     : function(resp) {

                                                                                   if (resp.weight <= 1) {

        
                                                                                        var items = [];
                
                                                                                        for (var key in productBasket) {
                                                                                            items.push({
                                                                                                productId : key,
                                                                                                quantity  : productBasket[key]
                                                                                            });
                                                                                        }
                
                                                                                        var date = new Date();
                     
                                                                                        var data = {
                                                                                            datetime    : date.toISOString(),
                                                                                            customerId  : id,
                                                                                            depotId     : depotId,
                                                                                            userId      : App.user().id,
                                                                                            contactType : contactType,
                                                                                            products    : items
                                                                                        };
                         
                                                                                        //Storage.process({
                                                                                        //    type        : 'PUT',
                                                                                        //    resource    : '!order',
                                                                                        //    data        : data,
                                                                                        //    description : 'Create new order for customer "' + customer.name + '".',
                                                                                        //    hint        : 'The order could not be created: ',
                                                                                        //    complete: function() {
                                                                                        //        window.location.hash = '!f/customer/' + id;
                                                                                        //    },
                                                                                        //    successMsg: 'The order was created.'
                                                                                        //});
                
                
                                                                                    } else {
                                                                                       alert('This order exceeds the maximum vehicle capacity.');
                                                                                    }

                                                                               }
                                                                        });

                                                                        }

                                                                    });

                                                                });

                                                            });
                                                        
                                                        });

                                                        });
                                                        });
                                                        });










        //T.render('admin/order/edit', function(t) {

        //    Model.getOrders(function(orders) {
        //        Storage.find(id, orders, function(order) {
        //            Model.getProductsForOrder(id, function(products) { 
        //                Model.getProducts(function(allProducts) {

        //                    order.product = products;
        //                    order.all = allProducts;

        //                    $('#main').html(t(order));

        //                });
        //            });
        //        });
        //    });

        //});
    },
    showUsers: function() {
        T.render('admin/user/index', function(t) {
            Model.getUsers(function(users) {

                var users_ = jQuery.extend(true, {}, users);
                _.each(users_, function(user) {
                    user.role = Model.readableRoleName(user.role);
                });

                $('#main').html(t({user: users_}));

            });
        });
    },
    editUser: function(id) {
        T.render('admin/user/edit', function(t) {
            Model.getUser(id, function(user) {
                Model.getDepots(function(depots) {

                    user.depot = depots;

                    var form = $('<form></form>').append(t(user));
                    $('#main').html(form);

                    if (user.depotId) {
                        $('select[name="depot"]').val(user.depotId);
                    }
 
                    form.validate({
                        rules: {
                            "name"  : "required",
                            "depot" : "required"
                        },
                        submitHandler: function(form) {
        
                            var data = {
                                name    : form['name'].value,
                                depotId : form['depot'].value,
                                role    : user.role
                            };
        
                            Storage.process({
                                type        : 'PUT',
                                resource    : 'user/' + id,
                                data        : data,
                                description : 'Update user: "' + user.username + '".',
                                purge       : ['users', 'depots'],
                                hint        : 'The user could not be updated: ',
                                complete: function() {
                                    window.location.hash = 'users';
                                },
                                successMsg: 'User "' + user.username + '" was updated.'
                            });
        
                        }
                    });

                });
            });
        });
    },
    deleteUser: function(id) {
        T.render('admin/user/delete', function(t) {
            Model.getUser(id, function(user) {

                $('#main').html(t(user));

                if (user.id != 1) {
                    $('button.confirm').click(function() {
    
                        Storage.process({
                            type        : 'DELETE',
                            resource    : 'user/' + id,
                            data        : '',
                            description : 'Delete user "' + user.username + '".',
                            purge       : 'users',
                            hint        : 'Cannot delete user: ',
                            complete: function() {
                                window.location.hash = 'users';
                            },
                            successMsg: 'User "' + user.username + '" was deleted.'
                        });
    
                    });
                }

            });
        });
    },
    createUser: function() {
        T.render('admin/user/create', function(t) {
            Model.getDepots(function(depots) {

                var roles = {
                    'field-staff'   : 'Field Staff',
                    'call-center'   : 'Call Center',
                    'driver'        : 'Driver',
                    'admin'         : 'Administrator',
                    'depot-manager' : 'Depot Manager'
                };

                var form = $('<form></form>').append(t({
                    role  : roles, 
                    depot : depots
                }));

                $('#main').html(form);

                $('select[name="role"]').change(function() {
                    var div = $('#user-create-depot-select');
                    if ($(this).val() === 'admin') {
                        div.hide();
                    } else {
                        div.show();
                    }
                });

                form.validate({
                    rules: {
                        "name"     : "required",
                        "username" : "required",
                        "password" : {
                            required  : true,
                            minlength : 5
                        },
                        "confirm"  : {
                            required  : true,
                            minlength : 5,
                            equalTo   : "#password"
                        },
                        "depot"    : "required"
                    },
                    submitHandler: function(form) {
    
                        var key  = $(document.body).data('key'),
                            pass = CryptoJS.HmacSHA1(form['password'].value, key).toString();

                        var data = {
                            name     : form['name'].value,
                            role     : form['role'].value,
                            username : form['username'].value,
                            password : pass
                        };

                        data.depotId = data.role == 'admin' ? null : form['depot'].value;
    
                        Storage.process({
                            type        : 'POST',
                            resource    : 'user',
                            data        : data,
                            description : 'Create new user: "' + data.username + '".',
                            purge       : ['users', 'depots'],
                            hint        : 'The user could not be created: ',
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A user with the username "' + data.username + '" already exists.'
                            },
                            complete: function() {
                                window.location.hash = 'users';
                            },
                            successMsg: 'User "' + data.username + '" was created.'
                        });
    
                    }
                });

            });
        });
    },
    viewUser: function(id) {
        T.render('admin/user/view', function(t) {
            Model.getUser(id, function(user) {
                user.role = Model.readableRoleName(user.role);
                $('#main').html(t(user));
            });
        });
    },
    commissionMatrix: function(offset) {
        T.render('admin/user/commissions', function(t) {
            T.render('admin/user/commission/edit', function(t_) {
                T.render('admin/user/commission/row', function(t__) {
    
                    Model.getProductsCount(function(count) {
        
                        var pageCount = Math.ceil(count.count / 10);
        
                        if (!offset)
                            offset = 1;
        
                        var fr = 10*(offset - 1) + 1, 
                            to = fr + 4;
        
                        Model.getProductsInterval([fr, to], function(products) {
        
                            var roles = ['field-staff', 'depot-manager', 'admin', 'call-center', 'driver'];
                
                            Model.getRoleCommissionValues([fr, to], function(values) {
                
                                var productCommissionVals = {};
                
                                _.each(values, function(value) {
                                    if (productCommissionVals.hasOwnProperty(value.productId)) {
                                        productCommissionVals[value.productId][value.role] = value.value;
                                    } else {
                                        var obj = {
                                            productId   : value.productId,
                                            productName : value.productName
                                        };
                                        obj[value.role] = value.value;
                                        productCommissionVals[value.productId] = obj;
                                    }
                                });
        
                                _.each(products, function(product) {
                                    product.commission = {};
                                    if (productCommissionVals.hasOwnProperty(product.id)) {
                                        product.commission = productCommissionVals[product.id];
                                    } 
                                    _.each(roles, function(role) {
                                        if (!product.commission.hasOwnProperty(role)) {
                                            product.commission[role] = 0; 
                                        }
                                    });
                                });
        
                                var paginator = [];
        
                                for (var i = 1; i <= pageCount; i++) {
                                    paginator.push({
                                        page    : i,
                                        current : (i == offset)
                                    });
                                }
        
                                $('#main').html(t({
                                    product     : products,
                                    paginator   : paginator
                                }));
        
                                var indexedProducts = Storage.toMap(products);

                                $('.commission-edit').click(function() {
                                    var productId = $(this).data('id');
                                    Storage.find(productId, indexedProducts, function(product) { 

                                        var div  = $(this).parent().parent(),
                                            form = div.html(t_(product)).find('form');

                                        form.validate({
                                            rules: {
                                                "field-staff"    : "required number",
                                                "call-center"    : "required number",
                                                "driver"         : "required number",
                                                "depot-manager"  : "required number"
                                            },
                                            submitHandler: function(form) {

                                                var data = {
                                                    "fieldStaff"   : form['field-staff'].value,
                                                    "callCenter"   : form['call-center'].value,
                                                    "driver"       : form['driver'].value,
                                                    "depotManager" : form['depot-manager'].value
                                                };

                                                Storage.process({
                                                    type        : 'PUT',
                                                    resource    : '!role-commission/product/' + productId,
                                                    data        : data,
                                                    description : 'Update role commission values for product "' + product.name + '".',
                                                    purge       : 'commission-values-' + fr + '-' + to,
                                                    hint        : 'The action could not be completed: ',
                                                    success: function() {
                                                        product.commission['field-staff']   = data.fieldStaff;
                                                        product.commission['call-center']   = data.callCenter;
                                                        product.commission['driver']        = data.driver;
                                                        product.commission['depot-manager'] = data.depotManager;
                                                        div.html(t__(product));
                                                    },
                                                    successMsg: 'Role commission values for product "' + product.name + '" was updated.'
                                                });

                                            }
                                        });
                                        
                                    }.bind(this));
                                });
        
                            });
                
                        });
        
                    });
                });
            });
        });
    },
    showSystemActivityLog: function() {

        $('#main').html('show system activity log');

    },
    editTaskSettings: function() {
        T.render('admin/task/settings', function(t) {

            Model.getSettings('task', function(settings) {

                var obj;
                try {
                    obj = JSON.parse(settings.value.replace(/\\/g, ''));
                } catch(e) {
                    obj = {
                        contactTimeInterval  : 1,
                        orderTimeInterval    : 1,
                        visitTimeInterval    : 1,
                        inactiveTimeInterval : 1
                    };
                }

                var form = $('<form></form>').append(t({settings: obj}));
    
                $('#main').html(form);
   
                form.validate({
                    rules: {
                        'contact-time-interval'  : 'required digits',
                        'order-time-interval'    : 'required digits',
                        'visit-time-interval'    : 'required digits',
                        'inactive-time-interval' : 'required digits'
                    },
                    submitHandler: function(form) {

                        var obj = {
                            contactTimeInterval  : form['contact-time-interval'].value,
                            orderTimeInterval    : form['order-time-interval'].value,
                            visitTimeInterval    : form['visit-time-interval'].value,
                            inactiveTimeInterval : form['inactive-time-interval'].value
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : 'settings/task',
                            data        : { value: JSON.stringify(obj) },
                            description : 'Update task settings',
                            hint        : 'The task settings could not be updated: ',
                            complete    : function() {
                                App.refresh();
                            },
                            successMsg  : 'Task settings were updated.'
                        });

                    }
                });

                
            });
            

           

        });
    },
    fieldstaff_showAllCustomers: function() {
        T.render('fieldstaff/customer/all', function(t) {
            Model.getCustomers(function(customers) {
                $('#main').html(t({customer: customers})); 
            });
        });
    },
    fieldstaff_showPendingCustomers: function() {
        T.render('fieldstaff/customer/pending/index', function(t) {
            Model.getPendingCustomers(function(customers) {

                $('#main').html(t({customer: customers})); 

            });
        });
    },
    fieldstaff_registerCustomer: function(id) {
        T.render('fieldstaff/customer/pending/register', function(t) {

            Storage.chain(Model.getAreas)
                   .chain(Model.getPriceCategories)
                   .using(function(areas, priceCategories) {
 
                Model.getPendingCustomers(function(customers) {
                    Storage.find(id, customers, function(customer) {
    
                        customer.priceCategory = priceCategories;
                        customer.area          = areas;

                        var form = $('<form></form>').append(t(customer));
        
                        $('#main').html(form);

                        form.validate({
                            rules: {
                                "name"           : "required",
                                "address"        : "required",
                                "latitude"       : "required number",
                                "longitude"      : "required number",
                                "tin"            : "required",
                                "phone"          : "required"
                            },
                            submitHandler: function(form) {
        
                                var data = {
                                    name          : form['name'].value,
                                    latitude      : form['latitude'].value,
                                    longitude     : form['longitude'].value,
                                    tin           : form['tin'].value,
                                    phone         : form['phone'].value,
                                    address       : form['address'].value,
                                    isActive      : form['is-active'].checked,
                                    areaId        : form['area'].value,
                                    priceCatId    : form['price-category'].value
                                };
        
                                Storage.process({
                                    type        : 'POST',
                                    resource    : 'customer',
                                    data        : data,
                                    description : 'Create customer "' + data.name + '".',
                                    purge       : 'customers',
                                    hint        : 'The customer could not be created: ',
                                    feedback    : {
                                        'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A customer with the name "' + data.name + '" already exists.'
                                    },
                                    success: function() {
                                        Storage.process({
                                            type        : 'DELETE',
                                            resource    : 'pending/' + id
                                         });
                                    },
                                    complete: function() {
                                        window.location.hash = '!f/customers';
                                    },
                                    successMsg: 'Customer "' + data.name + '" was successfully created.'
                                });
        
                            }
                        });


                    });
                });
            });

        });
    },
    fieldstaff_showCustomers: function() {
        T.render('fieldstaff/customer/index', function(t) {

            Model.getAreasForCurrentUser(function(areas) {
               Model.getCustomers(function(customers) {

                    var areaCustomers = Model.filter(customers, function(item) {
                        return _.contains(areas, item.areaId);
                    });

                    $('#main').html(t({customer: areaCustomers}));

                });
            });

        });
    },
    fieldstaff_createCustomer: function() {

        T.render('fieldstaff/customer/create', function(t) {

            Storage.chain(Model.getAreas)
                   .chain(Model.getPriceCategories)
                   .using(function(areas, priceCategories) {
   
                var form = $('<form></form>').append(t({
                    priceCategory : priceCategories,
                    area          : areas
                }));

                $('#main').html(form);

                var geoPos = null;

                if (navigator.geolocation) {
                    var updatePosition = function(position) {
                        geoPos = position.coords;
                        $('input[name="latitude"]').val(geoPos.latitude);
                        $('input[name="longitude"]').val(geoPos.longitude);
                        $('#geo-meta').html('Location accuracy: ' + geoPos.accuracy + ' meters');
                    };
                    navigator.geolocation.watchPosition(updatePosition, function() {}, {enableHighAccuracy:true}); 
                    navigator.geolocation.getCurrentPosition(updatePosition, function() {}, {enableHighAccuracy:true, maximumAge:Infinity, timeout:0});
                } 

                form.validate({
                    rules: {
                        "name"           : "required",
                        "address"        : "required",
                        "tin"            : "required",
                        "phone"          : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name          : form['name'].value,
                            latitude      : form['latitude'].value,
                            longitude     : form['longitude'].value,
                            tin           : form['tin'].value,
                            phone         : form['phone'].value,
                            address       : form['address'].value,
                            isActive      : form['is-active'].checked,
                            areaId        : form['area'].value,
                            priceCatId    : form['price-category'].value
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : 'customer',
                            data        : data,
                            description : 'Create customer "' + data.name + '".',
                            purge       : 'customers',
                            hint        : 'The customer could not be created: ',
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A customer with the name "' + data.name + '" already exists.'
                            },
                            complete: function() {
                                window.location.hash = '!f/customers';
                            },
                            successMsg: 'Customer "' + data.name + '" was successfully created.'
                        });

                    }
                });

            });

        });


    },
    fieldstaff_viewCustomer: function(id, tab) {
        T.render('fieldstaff/customer/view', function(t) {



            Model.getOrderAverageForCustomer(id, function(orderAverage) {

                Model.getDepotForCurrentUser(function(depotId) {

                    Model.getAverageOrderTimeInterval(id, function(timeInterval) {
                        Model.getCustomer(id, function(customer) {
    
                            customer.averageOrderValue   = orderAverage.average;
                            customer.averageTimeInterval = timeInterval.hours;
            
                            switch (tab) {
                                case 'orders':
                                    T.render('fieldstaff/order/index', function(t_) {
                                        Model.getOrdersForCustomer(id, function(orders) {
            
                                            $('#main').html(t(customer));
                                            $('#customer-orders').html(t_({order: orders}));
            
                                        });
                                    });
                                    break;
                                case 'contacts':
                                    T.render('fieldstaff/customer/contacts', function(t_) {
                                        Model.getContactsForCustomer(id, function(contacts) {
            
                                            $('#main').html(t(customer));
                                            customer.contact = contacts;
                                            $('#customer-contacts').html(t_(customer));
            
                                        });
                                    });
                                    break;
                                case 'complaints':
                                    T.render('fieldstaff/complaint/index', function(t_) {
                                        Model.getComplaints(function(complaints) {
            
                                            $('#main').html(t(customer));
    
                                            var customerComplaints = Model.filter(complaints, function(item) {
                                                return item.customerId == id;
                                            });
            
                                            $('#customer-complaints').html(t_({
                                                complaint: customerComplaints
                                            }));
            
                                        });
                                    });
                                    break;
                                case 'activity':
                                    T.render('fieldstaff/customer/activity', function(t_) {
                                        Model.getActivityForCustomer(id, function(activities) {
            
                                            $('#main').html(t(customer));
    

                                            _.each(activities, function(act) {

                                                switch (act.contactType) {
                                                    case 'proactive':
                                                        act.contactType = 'Proactive'
                                                        break;
                                                    case 'visit':
                                                        act.contactType = 'Customer Visit'
                                                        break;
                                                    case 'customer-received':
                                                        act.contactType = 'Received From Customer'
                                                        break;
                                                    default:
                                                        act.contactType = '-';
                                                }

                                                var url = null;
                                                switch (act.kind) {
                                                    case 'service-complaint':
                                                    case 'quality-complaint':
                                                    case 'complaint-resolved':
                                                        url = 'complaint/' + act.entityId;
                                                        break;
                                                    default:
                                                }
                                                act.url = url;
                                            });
    
                                            customer.activity = activities;
                                            $('#customer-activity').html(t_(customer));
            
                                        });
                                    });
                                    break;
                                case 'tasks':
                                    T.render('fieldstaff/customer/tasks', function(t_) {

                                        $('#main').html(t(customer));
                                        $('#customer-tasks').html(t_(customer));

                                    });
                                    break;

                                case 'register-visit':
                                case 'register-proactive':
                                case 'register-customer':
    
                                    var contactType = null;

                                    switch (tab) {
                                        case 'register-visit':
                                            contactType = 'visit';
                                            break;
                                        case 'register-proactive':
                                            contactType = 'proactive';
                                            break;
                                        case 'register-customer':
                                            contactType = 'customer-received';
                                            break;
                                        default:
                                    }
    
                                    T.render('fieldstaff/activity/register', function(t_) {
    
                                        $('#main').html(t(customer));
                                        $('#customer-activity-create').html(t_());
    
    
                                        $('.activity-action').click(function() {
    
                                            switch ($(this).data('item')) {
                                                case 'activity-add-order':
                                                    T.render('fieldstaff/order/create', function(t_) {
                                                        T.render('fieldstaff/order/product', function(t__) {
                            


                                                            // Temporarily disable onRequestBegin hook
                                                            var callback = App.onRequestBegin;
                                                            App.onRequestBegin = function() {};
                            
                                                            Model.getProducts(function(products) {
                            
                                                                App.onRequestBegin = callback;
                            
                                                                var form = $('<form></form>');
                                                                form.append(t_({product: products}));
                                                                $('#form-add-order').html(form);
    
                                                                var selected = [];

                                                                var productBasket = {};
    
                                                                //$('#order-validate').click(function() {
    
                                                                //    var qts = [];
                                                                //    var products = [];
    
                                                                //    $('.order-product-quantity').each(function(item) {
                                                                //        products.push($(this).data('id'));
                                                                //        qts.push(Number($(this).val()));
                                                                //    });
    
                                                                //    Storage.process({
                                                                //        type        : 'POST',
                                                                //        resource    : '/calculate-least-weight',
                                                                //        data        : {qts: qts, products: products},
                                                                //        complete    : function(resp) {
    
                                                                //            console.log(resp);
    
                                                                //        },
                                                                //    });
    
                                                                //});
    


                                                                    var update = function(quantity, productId, callback) {
                                                                        
//                                                                        var product = products[productId];

                                                                        //
    
                                                                        Storage.process({
                                                                            type        : 'GET',
                                                                            resource    : '/stock/product/' + productId + '/depot/' + depotId,
                                                                            success     : function(resp) {
    
                                                                                var available = resp.available;
    
                                                                                var qts = [];
                                                                                var products = [];
        
                                                                                $('.order-product-quantity').each(function(item) {
                                                                                    products.push($(this).data('id'));
                                                                                    qts.push(Number($(this).val()));
                                                                                });
    
                                                                                products.push(Number(productId));
                                                                                qts.push(quantity);
    
                                                                                Storage.process({
                                                                                       type        : 'POST',
                                                                                       resource    : '/calculate-least-weight',
                                                                                       data        : {qts: qts, products: products},
                                                                                       success     : function(resp) {
                                                                                           callback(resp.weight, available);
                                                                                       }
                                                                                });
    
                                                                                //$('input[name="prod-' + productId + '-quantity"]').rules('add', {
                                                                                //    'required' : true,
                                                                                //    digits     : true,
                                                                                //    min        : 1,
                                                                                //    max        : resp.available
                                                                                //});
    
                                                                            }
                                                                        });
     
    
                                                                    };







                                                                $('#order-add-product').click(function() {


                                                                    var productId = $('#order-product-select').val(),
                                                                        product = products[productId];

                                                                    var quantity = Number($('#order-item-add-quantity').val());

                                                                    $('#order-item-add-quantity').val(1);

                                                                    update(quantity, productId, function(weight, available) {


                                                                        if (quantity <= available && weight <= 1) {

                                                                            product.quantity = quantity;

                                                                            $('#order-products tbody').append(t__(product));
                                                                            $('#order-product-select option[value="' + productId + '"]').remove();
            
                                                                            //$('input[name="prod-' + productId + '-quantity"]').rules('add', 'required digits');
            
                                                                            selected.push(productId);

                                                                            var price = product.category[customer.priceCatId].price * quantity;

                                                                            $('#prod-' + productId + '-sub-total').html(price);

                                                                            productBasket[productId] = quantity;

                                                                        } else {
                                                                            var element = $('#order-product-select').parent();
                                                                            if (quantity > available) {
                                                                                element.append('Insufficient stock quantity available.');
                                                                            } else {
                                                                                element.append('The selected quantity is too large for any available vehicle.');
                                                                            }
                                                                        }

                                                                    });

                                                                    return false;

                                                                });
                                                               

                                                                            $('#order-products').on('click', '.order-product-qty-edit', function() {
                                                                                $(this).parent().hide();
                                                                                $(this).parent().parent().find('div').first().show();
                                                                            });

                                                                            $('#order-products').on('click', '.product-remove', function() {

                                                                                var pid = $(this).data('id');
                                                                                var product = products[pid];

                                                                                $(this).parent().parent().remove();
                                                                                $('#order-product-select').append('<option value="' + pid + '">' + product.name + '</option>');

                                                                                delete productBasket[pid];

                                                                            });

                                                                            $('#order-products').on('click', '.order-product-qty-update', function() {


                                                                                var productId = Number($(this).data('id')),
                                                                                    quantity  = Number($('#prod-' + productId + '-quantity').val()),
                                                                                    t = $(this);
                                                                                
                                                                                update(quantity, productId, function(weight, available) {
           
                                                                                    if (quantity <= available && weight <= 1) {

                                                                                        $('#prod-' + productId + '-quantity-text').html($('#prod-' + productId + '-quantity').val());

                                                                                        $(this).parent().hide();
                                                                                        $(this).parent().parent().find('div').first().next().show();

                                                                                        var product = products[productId];

                                                                                        var price = product.category[customer.priceCatId].price * quantity;
                                                                                        $('#prod-' + productId + '-sub-total').html(price);

                                                                                        productBasket[productId] = quantity;


                                                                                    } else {
                                                                                        if (quantity > available) {
                                                                                            $('#prod-' + productId + '-sub-total').html('Insufficient stock quantity available.');
                                                                                        } else {
                                                                                            $('#prod-' + productId + '-sub-total').html('The selected quantity is too large for any available vehicle.');
                                                                                        }
                                                                                    }
            
                                                                                }.bind(this));


                                                                             });

    
                                                                //$('.product-remove').on('click', function() {
                                                                //    alert('x');
                                                                //});
    
                                                                form.validate({
                                                                    submitHandler: function(form) {
    
                                                                        var qts = [];
                                                                        var products = [];

                                                                        $('.order-product-quantity').each(function(item) {
                                                                            products.push($(this).data('id'));
                                                                            qts.push(Number($(this).val()));
                                                                        });

                                                                        Storage.process({
                                                                               type        : 'POST',
                                                                               resource    : '/calculate-least-weight',
                                                                               data        : {qts: qts, products: products},
                                                                               success     : function(resp) {

                                                                                   if (resp.weight <= 1) {

        
                                                                                        var items = [];
                
                                                                                        for (var key in productBasket) {
                                                                                            items.push({
                                                                                                productId : key,
                                                                                                quantity  : productBasket[key]
                                                                                            });
                                                                                        }
                
                                                                                        var date = new Date();
                     
                                                                                        var data = {
                                                                                            datetime    : date.toISOString(),
                                                                                            customerId  : id,
                                                                                            depotId     : depotId,
                                                                                            userId      : App.user().id,
                                                                                            contactType : contactType,
                                                                                            products    : items
                                                                                        };
                         
                                                                                        Storage.process({
                                                                                            type        : 'POST',
                                                                                            resource    : '!order',
                                                                                            data        : data,
                                                                                            description : 'Create new order for customer "' + customer.name + '".',
                                                                                            hint        : 'The order could not be created: ',
                                                                                            complete: function() {
                                                                                                window.location.hash = '!f/customer/' + id;
                                                                                            },
                                                                                            successMsg: 'The order was created.'
                                                                                        });
                
                
                                                                                    } else {
                                                                                       alert('This order exceeds the maximum vehicle capacity.');
                                                                                    }

                                                                               }
                                                                        });

                                                                        }

                                                                    });

                                                                });

                                                            });
                                                        
                                                        });

                            
                                                    break;
                                                case 'activity-service-complaint':
                                                    T.render('fieldstaff/complaint/service/create', function(t_) {
                        
                                                        var form = $('<form></form>').append(t_());
                                        
                                                        $('#form-service-complaint').html(form);
                                        
                                                        form.validate({
                                                            rules: {
                                                                "title"          : "required",
                                                                "description"    : "required"
                                                            },
                                                            submitHandler: function(form) {
                                        
                                                                var date = new Date();
     
                                                                var data = {
                                                                    datetime    : date.toISOString(),
                                                                    title       : form['title'].value,
                                                                    description : form['description'].value,
                                                                    userId      : App.user().id,
                                                                    contactType : contactType
                                                                };
                                        
                                                                Storage.process({
                                                                    type        : 'POST',
                                                                    resource    : '!complaint/service/customer/' + id,
                                                                    data        : data,
                                                                    description : 'Register new service complaint.',
                                                                    hint        : 'The service complaint could not be registered: ',
                                                                    complete: function() {
                                                                        $('#form-service-complaint').empty();
                                                                    },
                                                                    successMsg: 'The service complaint was successfully registered.'
                                                                });
                                        
                                                            }
                                                        });
    
                                                    });
                                                    break;
                                                case 'activity-quality-complaint':
                                                    T.render('fieldstaff/complaint/quality/create', function(t_) {
                                                        T.render('fieldstaff/complaint/quality/product', function(t__) {
    
                                                            // Temporarily disable onRequestBegin hook
                                                            var callback = App.onRequestBegin;
                                                            App.onRequestBegin = function() {};
                            
                                                            Model.getProducts(function(products) {
                            
                                                                App.onRequestBegin = callback;
        
                                                                var form = $('<form></form>');
                                                                form.append(t_({product: products}));
                                                                $('#form-quality-complaint').html(form);
        
                                                                var rules = {
                                                                    "complaint-title"       : "required",
                                                                    "complaint-description" : "required"
                                                                };
        
                                                                var selected = [];
        
                                                                $('.complaint-add-product').click(function() {
        
                                                                    var productId = $('#complaint-product-select').val(),
                                                                        product = products[productId];
                                                                
                                                                    form.append(t__(product));
        
                                                                    $('#complaint-product-select option[value="' + productId + '"]').remove();
        
                                                                    $('input[name="prod-' + productId + '-title"]').rules('add', 'required');
                                                                    $('input[name="prod-' + productId + '-quantity"]').rules('add', 'required digits');
                                                                    $('input[name="prod-' + productId + '-batch-number"]').rules('add', 'required');
                                                                    $('input[name="prod-' + productId + '-production-date"]').rules('add', 'required date');
                                                                    $('input[name="prod-' + productId + '-production-time"]').rules('add', 'required time');
                                                                    $('input[name="prod-' + productId + '-expiry-date"]').rules('add', 'required date');
        
                                                                    selected.push(productId);
        
                                                                });
        
                                                                form.validate({
                                                                    rules: rules,
                                                                    submitHandler: function(form) {
        
                                                                        var products = [];
        
                                                                        _.each(selected, function(id) {
                                                                            var produced = form['prod-' + id + '-production-date'].value + ' ' + form['prod-' + id + '-production-time'].value;
                                                                            products.push({
                                                                                batchNumber : form['prod-' + id + '-batch-number'].value,
                                                                                productId   : id,
                                                                                quantity    : form['prod-' + id + '-quantity'].value,
                                                                                produced    : produced,
                                                                                expiryDate  : form['prod-' + id + '-expiry-date'].value,
                                                                                description : form['prod-' + id + '-comment'].value
                                                                            });
                                                                        });
        
                                                                        var date = new Date();
        
                                                                        var data = {
                                                                            datetime    : date.toISOString(),
                                                                            title       : form['complaint-title'].value,
                                                                            description : form['complaint-description'].value,
                                                                            products    : products,
                                                                            userId      : App.user().id,
                                                                            contactType : contactType 
                                                                        };
                                                    
                                                                        Storage.process({
                                                                            type        : 'POST',
                                                                            resource    : '!complaint/quality/customer/' + id,
                                                                            data        : data,
                                                                            description : 'Register new quality complaint.',
                                                                            hint        : 'The quality complaint could not be registered: ',
                                                                            complete: function() {
                                                                                $('#form-quality-complaint').empty();
                                                                            },
                                                                            successMsg: 'The quality complaint was successfully registered.'
                                                                        });
         
                                                                    }
                                                                });
                          
                                                            });
                                                        });
                                                    });
                                                    break;
                                                case 'activity-add-contact':
    
                                                    var customerId = id;
    
                                                    T.render('fieldstaff/contact/create', function(t_) {
                        
                                                        // Temporarily disable onRequestBegin hook
                                                        var callback = App.onRequestBegin;
                                                        App.onRequestBegin = function() {};
                        
                                                        Storage.chain(Model.getContactTypes)
                                                               .chain(Model.getCustomer(customerId))
                                                               .using(function(contactTypes, customer) {
                                                
                                                            App.onRequestBegin = callback;
                        
                                                            customer.contactType = contactTypes;
                                            
                                                            var form = $('<form></form>').append(t_(customer));
                                                
                                                            $('#form-add-contact').html(form);
                                            
                                                            form.validate({
                                                                rules: {
                                                                    "kind"  : "required",
                                                                    "datum" : "required"
                                                                },
                                                                submitHandler: function(form) {
                                            
                                                                    var date = new Date();
 
                                                                    var data = {
                                                                        kind        : form['kind'].value,
                                                                        datum       : form['datum'].value, 
                                                                        meta        : form['meta'].value,
                                                                        contactType : contactType,
                                                                        userId      : App.user().id,
                                                                        datetime    : date.toISOString()
                                                                    };
                                            
                                                                    Storage.process({
                                                                        type        : 'POST',
                                                                        resource    : '!contact/customer/' + customerId,
                                                                        data        : data,
                                                                        description : 'Create a new customer contact for customer "' + customer.name + '".',
                                                                        purge       : ['customers', 'contacts-customer-' + customerId],
                                                                        hint        : 'The customer contact could not be created: ',
                                                                        complete: function() {
                                                                            $('#form-add-contact').empty();
                                                                        },
                                                                        successMsg: 'The customer contact information was added to customer "<a href="#customer/' + customerId + '">' + customer.name + '</a>".'
                                                                    });
                                                                }
                                                            });
                                                
                                                        });
                        
                                                    });
    
    
                                                    break;
                                                case 'activity-call-back':
                                                    T.render('fieldstaff/callback/create', function(t_) {
                        
                                                        var customerId = id;

                                                        var form = $('<form></form>').append(t_());

                                                        $('#form-call-back').html(form);

                                                        form.validate({
                                                            rules: {
                                                                'description' : 'required',
                                                                'date'        : 'required date',
                                                                'time'        : 'required time'
                                                            },
                                                            submitHandler: function(form) {

                                                                var taskType = form['task-type'].value;

                                                                var data = {
                                                                    datetime    : form['date'].value + ' ' + form['time'].value,
                                                                    description : form['description'].value,
                                                                    kind        : (1 == taskType) ? 'scheduled-call-back' : 'scheduled-visit',
                                                                    userId      : App.user().id,
                                                                    contactType : contactType,
                                                                    entityId    : customerId
                                                                };
                                            
                                                                Storage.process({
                                                                    type        : 'POST',
                                                                    resource    : 'activity/customer/' + customerId,
                                                                    data        : data,
                                                                    description : 'Schedule call back form customer "' + customer.name + '".',
                                                                    hint        : 'The call back could not be scheduled: ',
                                                                    complete: function() {
                                                                        $('#form-call-back').empty();
                                                                    },
                                                                    successMsg: 'The call back for customer "' + customer.name + '" has been scheduled.'
                                                                });

                                                            }
                                                        });
                        
                        
                                                    });
                                                    break;
                                                case 'activity-none':

                                                    var customerId = id;

                                                    var date = new Date();

                                                    var data = {
                                                        datetime    : date.toISOString(),
                                                        description : 'No associated activity.',
                                                        kind        : 'no-activity',
                                                        userId      : App.user().id,
                                                        contactType : contactType,
                                                        entityId    : customerId
                                                    };
                                
                                                    Storage.process({
                                                        type        : 'POST',
                                                        resource    : 'activity/customer/' + customerId,
                                                        data        : data,
                                                        description : 'Register a customer call.',
                                                        hint        : 'The activity could not be registered: ',
                                                        complete: function() {
                                                            window.location.hash = '!f/customer/' + customerId;
                                                        },
                                                        successMsg  : 'The customer activity for "' + customer.name + '" has been registered.'
                                                    });

                                                    break;
                                                default:
                                                    break;
                                            }
                        
    
                                        });
    
    
                                    });
                                    break;
                                case 'select-activity':
                                    T.render('fieldstaff/activity/type', function(t_) {
                            
                                        $('#main').html(t(customer));
                                        $('#customer-activity-create').html(t_(customer));
    
    
                                    });
                                    break;
    
                                default:
                                    $('#main').html(t(customer));
                            }
                    
                        });
            
                    });

                });

            });




        });
    },
    fieldstaff_createCustomerContact: function(customerId) {
        T.render('fieldstaff/contact/create', function(t) {

            Storage.chain(Model.getContactTypes)
                   .chain(Model.getCustomer(customerId))
                   .using(function(contactTypes, customer) {
    
                customer.contactType = contactTypes;

                var form = $('<form></form>').append(t(customer));
    
                $('#main').html(form);

                form.validate({
                    rules: {
                        "kind"  : "required",
                        "datum" : "required"
                    },
                    submitHandler: function(form) {

                        var date = new Date();

                        var data = {
                            kind        : form['kind'].value,
                            datum       : form['datum'].value, 
                            meta        : form['meta'].value,
                            contactType : contactType,
                            userId      : App.user().id,
                            datetime    : date.toISOString()
                        };
 
                        Storage.process({
                            type        : 'POST',
                            resource    : '!contact/customer/' + customerId,
                            data        : data,
                            description : 'Create a new customer contact for customer "' + customer.name + '".',
                            purge       : ['customers', 'contacts-customer-' + customerId],
                            hint        : 'The customer contact could not be created: ',
                            complete: function() {
                                window.location.hash = '!f/customer/' + customerId + '/tab/contacts';
                            },
                            successMsg: 'The customer contact information was added to customer "<a href="#customer/' + customerId + '">' + customer.name + '</a>".'
                        });
                    }
                });
    
            });

        });
    },
    fieldstaff_editCustomerContact: function(id) {
        T.render('fieldstaff/contact/edit', function(t) {

            Storage.chain(Model.getContactTypes)
                   .chain(Model.getContact(id))
                   .using(function(contactTypes, contact) {

                var customerId = contact.customerId;

                contact.contactType = contactTypes;

                var form = $('<form></form>').append(t(contact));
                $('#main').html(form);

                form.validate({
                    rules: {
                        "kind"  : "required",
                        "body"  : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            kind       : form['kind'].value,
                            datum      : form['datum'].value, 
                            meta       : form['meta'].value
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : 'contact/' + id + '/customer/' + customerId,
                            data        : data,
                            description : 'Edit customer contact for customer "' + contact.customerName + '".',
                            purge       : ['contact-' + id, 'contacts-customer-' + customerId],
                            hint        : 'The customer contact could not be updated: ',
                            complete: function() {
                                window.location.hash = '!f/customer/' + customerId + '/tab/contacts';
                            },
                            successMsg: 'The customer contact information was updated for customer "<a href="#customer/' + customerId + '">' + contact.customerName + '</a>".'
                        });

                    }
                });

            });

        });
    },
    fieldstaff_deleteCustomerContact: function(id) {
        T.render('fieldstaff/contact/delete', function(t) {
            Model.getContact(id, function(contact) {

                var form = $('<form></form>').append(t(contact));
                $('#main').html(form);

                $('button.confirm').click(function() {
                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'contact/' + id + '/customer/' + contact.customerId,
                        data        : '',
                        description : 'Delete contact for customer "' + contact.customerName + '".',
                        purge       : ['customers', 'contacts-customer-' + contact.customerId],
                        hint        : 'Cannot delete contact: ',
                        complete: function() {
                            window.location.hash = '!f/customer/' + contact.customerId + '/tab/contacts';
                        },
                        successMsg: 'The customer contact information was deleted.'
                    });
                });

            });
        });
    },
    fieldstaff_viewComplaint: function(id) {
        T.render('fieldstaff/complaint/view', function(t) {
            T.render('fieldstaff/complaint/products', function(t_) {
                Model.getComplaint(id, function(complaint) {

                    $('#main').html(t(complaint));

                    if ('quality' === complaint.kind) {
                        $('#main').append(t_(complaint));
                    }
 
                    $('button.resolve').click(function() {
    
                        var date = new Date();

                        Storage.process({
                            type        : 'PATCH',
                            resource    : '!complaint/resolve/' + id,
                            data        : {
                                datetime    : date.toISOString(),
                                customerId  : complaint.customerId,
                                userId      : App.user().id,
                                description : 'Complaint was resolved.'
                            },
                            description : 'Resolve complaint from customer "' + complaint.customer + '".',
                            purge       : 'complaints',
                            complete    : App.refresh
                        });
 
                    });

                });
            });
        });
    },
    fieldstaff_showProducts: function(customerId) {
        T.render('fieldstaff/product/index', function(t) {

            Model.getCustomer(customerId, function(customer) {
                Model.getProducts(function(products) {

                    var priceCatId = customer.priceCatId;

                    var customerProducts = [];

                    for (key in products) {
                        var product = products[key];

                        if (product.category && product.category.hasOwnProperty(priceCatId)) {
                            product.customerPrice = product.category[priceCatId].price;
                            customerProducts.push(product);
                        }
                    }
   
                    $('#main').html(t({
                        product: customerProducts
                    }));
  
                });
            });

        });

    },
    fieldstaff_viewProduct: function(id) {
        T.render('fieldstaff/product/view', function(t) {
            Model.getProduct(id, function(product) {

                $('#main').html(t(product));

            });
        });
    },
    fieldstaff_viewOrder: function(id) {
        T.render('fieldstaff/order/view', function(t) {

            Model.getOrders(function(orders) {
                Storage.find(id, orders, function(order) {
                    Model.getProductsForOrder(id, function(products) { 

                        order.product = products;
                        $('#main').html(t(order));

                    });
                });
            });

        });
    },
    fieldstaff_showOrders: function() {
        T.render('fieldstaff/order/index', function(t) {

            Model.getAreasForCurrentUser(function(areas) {
                Model.getOrders(function(orders) {

                    var areaOrders = Model.filter(orders, function(item) {
                        return _.contains(areas, item.areaId);
                    });

                    $('#main').html(t({order: areaOrders}));

                });
            });

        });
    },
    fieldstaff_showOrderActivityLog: function(orderId) {
        T.render('fieldstaff/order/log', function(t) {
            Model.getOrderActivity(orderId, function(activities) {

                _.each(activities, function(activity) {
                    activity.statusName = Model.readableOrderStatus(activity.status);
                });

                $('#main').html(t({activity: activities}));

            });
        });
    },
    fieldstaff_editOrder: function(id) {

        Model.getOrders(function(orders) {
            Storage.find(id, orders, function(order) {
 
                if ('placed' !== order.status) {
                    App.error({
                        responseJSON: { message: 'This order cannot be edited.' }
                    });
                    return;
                }

                $('#main').html('fs: edit order');

            });
        });

    },

    fieldstaff_showStock: function() {

        T.render('fieldstaff/stock/summary', function(t) {
            Model.getDepotForCurrentUser(function(depotId) {

                Model.getStockForDepot(depotId, function(stock) {
                    $('#main').html(t({item: stock}));
                });

            });
        });

        //T.render('fieldstaff/stock/index', function(t) {
        //    Model.getDepotForFieldstaffUser(function(depotId) {
        //        Model.getDepot(depotId, function(depot) {

        //            Storage.load('stock/depot/' + depotId, 'depot-' + depotId + '-stock', function(stock) {
    
        //                $('#main').html(t({
        //                    depot  : depot, 
        //                    item   : stock
        //                }));
    
        //            });

        //        });
        //    });
        //});
    },
    fieldstaff_showDispatches: function() {
        T.render('fieldstaff/dispatch/index', function(t) {
        
            $('#main').html(t());

        });
    },
    fieldstaff_showTasks: function() {
        T.render('fieldstaff/task/index', function(t) {

            Model.getFieldstaffUserTasks(function(tasks) {

                $('#main').html(t({task: tasks}));

            });
        });
    },
    fieldstaff_viewPerformance: function() {
        
        T.render('fieldstaff/user/performance', function(t) {

            var userId = App.user().id;

            Model.getTodaysTotalOrderValueForUser(userId, function(value) {
                Model.getTodaysCustomerCountForUser(userId, function(count) {
                    Model.getTodaysCommissionForUser(userId, function(sales) {

                        $('#main').html(t({
                            total      : value.total,
                            customers  : count.customers,
                            commission : sales.commission
                        }));

                    });
                });
            });

        });

    },
    driver_showOrders: function() {

        Model.getVehicleForCurrentUser(function(vehicle) {
            Model.getOrders(function(orders) {

                $('#main').html('show orders');

            });
        });

    },
    driver_showDeliveredOrders: function() {

        Model.getVehicleForCurrentUser(function(vehicle) {
            Model.getOrders(function(orders) {

                $('#main').html('show del. orders');

            });
        });

    },
    driver_viewDepot: function() {

        $('#main').html('view depot');

    },
    driver_showStock: function() {

        Model.getVehicleForCurrentUser(function(vehicle) {

            console.log(vehicle);

            $('#main').html('driver show stock');

        });

    },
    driver_showReturnStock: function() {

        $('#main').html('show return stock');

    },
    driver_performanceToday: function() {

        $('#main').html('show perf.');

    },
    driver_performanceWeekly: function() {

        $('#main').html('show perf. weekly');

    },
    driver_performanceMonthly: function() {

        $('#main').html('show perf. monthly');

    },
    callcenter_showCustomers: function() {
        T.render('callcenter/customer/all', function(t) {
            
            Model.getCustomers(function(customers) {

                $('#main').html(t({customer: customers}));

            });

        });
    },
    callcenter_showAreaCustomers: function() {
        T.render('callcenter/customer/index', function(t) {
            
            Model.getCustomers(function(customers) {
                Model.getAreasForCurrentUser(function(areas) {

                    // Filter customers by area id
                    var areaCustomers = Model.filter(customers, function(item) {
                        return _.contains(areas, item.areaId);
                    });

                    $('#main').html(t({customer: areaCustomers}));

                });
            });

        });
    },
    callcenter_createCustomer: function() {
        T.render('callcenter/customer/create', function(t) {

            Storage.chain(Model.getAreas)
                   .chain(Model.getPriceCategories)
                   .using(function(areas, priceCategories) {
   
                var form = $('<form></form>').append(t({
                    priceCategory : priceCategories,
                    area          : areas
                }));

                $('#main').html(form);

                form.validate({
                    rules: {
                        "name"           : "required",
                        "address"        : "required",
                        "phone"          : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name    : form['name'].value,
                            phone   : form['phone'].value,
                            address : form['address'].value,
                            userId  : App.user().id
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : 'customer-pending',
                            data        : data,
                            description : 'Register new customer: "' + data.name + '".',
                            hint        : 'The customer could not be registered: ',
                            complete: function() {
                                window.location.hash = '!c/customers';
                            },
                            successMsg: 'Customer "' + data.name + '" is pending confirmation.'
                        });

                    }
                });

            });

        });
    },
    callcenter_viewCustomerLocation: function(customerId) {

        $('#main').html('cs: view customer location');

    },
    callcenter_viewTasksForCustomer: function(customerId) {

        $('#main').html('cs: view tasks for customer');

    },
    callcenter_viewOrdersForCustomer: function(customerId) {

        $('#main').html('cs: view orders for customer');

    },
    callcenter_viewComplaintsForCustomer: function(customerId) {

        $('#main').html('cs: view complaints for customer');

    },
    callcenter_viewActivityForCustomer: function(customerId) {

        $('#main').html('cs: view activity for customer');

    },
    callcenter_viewContactsForCustomer: function(customerId) {

        $('#main').html('cs: view contacts for customer');

    },
    callcenter_viewCustomer: function(id, tab) {
        T.render('callcenter/customer/view', function(t) {

            Model.getOrderAverageForCustomer(id, function(orderAverage) {

                Model.getDepotForCurrentUser(function(depotId) {

                    Model.getAverageOrderTimeInterval(id, function(timeInterval) {
                        Model.getCustomer(id, function(customer) {
    
                            customer.averageOrderValue   = orderAverage.average;
                            customer.averageTimeInterval = timeInterval.hours;
            
                            switch (tab) {
                                case 'orders':
                                    T.render('callcenter/order/index', function(t_) {
                                        Model.getOrdersForCustomer(id, function(orders) {
            
                                            $('#main').html(t(customer));
                                            $('#customer-orders').html(t_({order: orders}));
            
                                        });
                                    });
                                    break;
                                case 'contacts':
                                    T.render('callcenter/customer/contacts', function(t_) {
                                        Model.getContactsForCustomer(id, function(contacts) {
            
                                            $('#main').html(t(customer));
                                            customer.contact = contacts;
                                            $('#customer-contacts').html(t_(customer));
            
                                        });
                                    });
                                    break;
                                case 'complaints':
                                    T.render('callcenter/complaint/index', function(t_) {
                                        Model.getComplaints(function(complaints) {
            
                                            $('#main').html(t(customer));
    
                                            var customerComplaints = Model.filter(complaints, function(item) {
                                                return item.customerId == id;
                                            });
            
                                            $('#customer-complaints').html(t_({
                                                complaint: customerComplaints
                                            }));
            
                                        });
                                    });
                                    break;
                                case 'activity':
                                    T.render('callcenter/customer/activity', function(t_) {
                                        Model.getActivityForCustomer(id, function(activities) {
            
                                            $('#main').html(t(customer));
    
                                            _.each(activities, function(act) {

                                                switch (act.contactType) {
                                                    case 'proactive':
                                                        act.contactType = 'Proactive'
                                                        break;
                                                    case 'visit':
                                                        act.contactType = 'Customer Visit'
                                                        break;
                                                    case 'customer-received':
                                                        act.contactType = 'Received From Customer'
                                                        break;
                                                    default:
                                                        act.contactType = '-';
                                                }
   
                                                var url = null;
                                                switch (act.kind) {
                                                    case 'service-complaint':
                                                    case 'quality-complaint':
                                                    case 'complaint-resolved':
                                                        url = 'complaint/' + act.entityId;
                                                        break;
                                                    default:
                                                }
                                                act.url = url;
                                            });
    
                                            customer.activity = activities;
                                            $('#customer-activity').html(t_(customer));
            
                                        });
                                    });
                                    break;
                                case 'tasks':
                                    T.render('callcenter/customer/tasks', function(t_) {

                                        Model.getOrdersWithStatus('delivered', function(orders) {

                                            var customerOrders = _.filter(orders, function(order) {
                                                return order.customerId == id;
                                            });

                                            $('#main').html(t(customer));

                                            customer.order = customerOrders;

                                            $('#customer-tasks').html(t_(customer));

                                            $('a.order-confirm-delivery').click(function() {

                                                var orderId = $(this).data('id'),
                                                    date = new Date();

                                                var data = {
                                                    'status'   : 'confirmed', 
                                                    'datetime' : date.toISOString()
                                                }

                                                Storage.process({
                                                    type        : 'PATCH',
                                                    resource    : '/!order/status/' + orderId,
                                                    data        : data,
                                                    description : 'Confirm order #' + orderId + ' as delivered.',
                                                    complete: function() {
                                                        App.refresh();
                                                    },
                                                    successMsg: 'The delivery has been confirmed.'
                                                });

                                            });

                                        });


                                    });
                                    break;
 
                                case 'register-proactive':
                                case 'register-customer':
    
                                    var contactType = null;

                                    switch (tab) {
                                        case 'register-visit':
                                            contactType = 'visit';
                                            break;
                                        case 'register-proactive':
                                            contactType = 'proactive';
                                            break;
                                        case 'register-customer':
                                            contactType = 'customer-received';
                                            break;
                                        default:
                                    }

                                    T.render('callcenter/activity/register', function(t_) {
    
                                        $('#main').html(t(customer));
                                        $('#customer-activity-create').html(t_());
    
    
                                        $('.activity-action').click(function() {
    
                                            switch ($(this).data('item')) {
                                                case 'activity-add-order':
                                                    T.render('callcenter/order/create', function(t_) {
                                                        T.render('callcenter/order/product', function(t__) {
                            
                                                            // Temporarily disable onRequestBegin hook
                                                            var callback = App.onRequestBegin;
                                                            App.onRequestBegin = function() {};
                            
                                                            Model.getProducts(function(products) {
                            
                                                                App.onRequestBegin = callback;
                            
                                                                var form = $('<form></form>');
                                                                form.append(t_({product: products}));
                                                                $('#form-add-order').html(form);
    
                                                                var selected = [];

                                                                var productBasket = {};
    
                                                                //$('#order-validate').click(function() {
    
                                                                //    var qts = [];
                                                                //    var products = [];
    
                                                                //    $('.order-product-quantity').each(function(item) {
                                                                //        products.push($(this).data('id'));
                                                                //        qts.push(Number($(this).val()));
                                                                //    });
    
                                                                //    Storage.process({
                                                                //        type        : 'POST',
                                                                //        resource    : '/calculate-least-weight',
                                                                //        data        : {qts: qts, products: products},
                                                                //        complete    : function(resp) {
    
                                                                //            console.log(resp);
    
                                                                //        },
                                                                //    });
    
                                                                //});
    


                                                                    var update = function(quantity, productId, callback) {
                                                                        
//                                                                        var product = products[productId];

                                                                        //
    
                                                                        Storage.process({
                                                                            type        : 'GET',
                                                                            resource    : '/stock/product/' + productId + '/depot/' + depotId,
                                                                            success     : function(resp) {
    
                                                                                var available = resp.available;
    
                                                                                var qts = [];
                                                                                var products = [];
        
                                                                                $('.order-product-quantity').each(function(item) {
                                                                                    products.push($(this).data('id'));
                                                                                    qts.push(Number($(this).val()));
                                                                                });
    
                                                                                products.push(Number(productId));
                                                                                qts.push(quantity);
    
                                                                                Storage.process({
                                                                                       type        : 'POST',
                                                                                       resource    : '/calculate-least-weight',
                                                                                       data        : {qts: qts, products: products},
                                                                                       success     : function(resp) {
                                                                                           callback(resp.weight, available);
                                                                                       }
                                                                                });
    
                                                                                //$('input[name="prod-' + productId + '-quantity"]').rules('add', {
                                                                                //    'required' : true,
                                                                                //    digits     : true,
                                                                                //    min        : 1,
                                                                                //    max        : resp.available
                                                                                //});
    
                                                                            }
                                                                        });
     
    
                                                                    };







                                                                $('#order-add-product').click(function() {


                                                                    var productId = $('#order-product-select').val(),
                                                                        product = products[productId];

                                                                    var quantity = Number($('#order-item-add-quantity').val());

                                                                    $('#order-item-add-quantity').val(1);

                                                                    update(quantity, productId, function(weight, available) {


                                                                        if (quantity <= available && weight <= 1) {

                                                                            product.quantity = quantity;

                                                                            $('#order-products tbody').append(t__(product));
                                                                            $('#order-product-select option[value="' + productId + '"]').remove();
            
                                                                            //$('input[name="prod-' + productId + '-quantity"]').rules('add', 'required digits');
            
                                                                            selected.push(productId);

                                                                            var price = product.category[customer.priceCatId].price * quantity;

                                                                            $('#prod-' + productId + '-sub-total').html(price);

                                                                            productBasket[productId] = quantity;

                                                                        } else {
                                                                            var element = $('#order-product-select').parent();
                                                                            if (quantity > available) {
                                                                                element.append('Insufficient stock quantity available.');
                                                                            } else {
                                                                                element.append('The selected quantity is too large for any available vehicle.');
                                                                            }
                                                                        }

                                                                    });

                                                                    return false;

                                                                });
                                                               

                                                                            $('#order-products').on('click', '.order-product-qty-edit', function() {
                                                                                $(this).parent().hide();
                                                                                $(this).parent().parent().find('div').first().show();
                                                                            });

                                                                            $('#order-products').on('click', '.product-remove', function() {

                                                                                var pid = $(this).data('id');
                                                                                var product = products[pid];

                                                                                $(this).parent().parent().remove();
                                                                                $('#order-product-select').append('<option value="' + pid + '">' + product.name + '</option>');

                                                                                delete productBasket[pid];

                                                                            });

                                                                            $('#order-products').on('click', '.order-product-qty-update', function() {


                                                                                var productId = Number($(this).data('id')),
                                                                                    quantity  = Number($('#prod-' + productId + '-quantity').val()),
                                                                                    t = $(this);
                                                                                
                                                                                update(quantity, productId, function(weight, available) {
           
                                                                                    if (quantity <= available && weight <= 1) {

                                                                                        $('#prod-' + productId + '-quantity-text').html($('#prod-' + productId + '-quantity').val());

                                                                                        $(this).parent().hide();
                                                                                        $(this).parent().parent().find('div').first().next().show();

                                                                                        var product = products[productId];

                                                                                        var price = product.category[customer.priceCatId].price * quantity;
                                                                                        $('#prod-' + productId + '-sub-total').html(price);

                                                                                        productBasket[productId] = quantity;


                                                                                    } else {
                                                                                        if (quantity > available) {
                                                                                            $('#prod-' + productId + '-sub-total').html('Insufficient stock quantity available.');
                                                                                        } else {
                                                                                            $('#prod-' + productId + '-sub-total').html('The selected quantity is too large for any available vehicle.');
                                                                                        }
                                                                                    }
            
                                                                                }.bind(this));


                                                                             });

    
                                                                //$('.product-remove').on('click', function() {
                                                                //    alert('x');
                                                                //});
    
                                                                form.validate({
                                                                    submitHandler: function(form) {
    
                                                                        var qts = [];
                                                                        var products = [];

                                                                        $('.order-product-quantity').each(function(item) {
                                                                            products.push($(this).data('id'));
                                                                            qts.push(Number($(this).val()));
                                                                        });

                                                                        Storage.process({
                                                                               type        : 'POST',
                                                                               resource    : '/calculate-least-weight',
                                                                               data        : {qts: qts, products: products},
                                                                               success     : function(resp) {

                                                                                   if (resp.weight <= 1) {

        
                                                                                        var items = [];
                
                                                                                        for (var key in productBasket) {
                                                                                            items.push({
                                                                                                productId : key,
                                                                                                quantity  : productBasket[key]
                                                                                            });
                                                                                        }
                
                                                                                        var date = new Date();
                     
                                                                                        var data = {
                                                                                            datetime    : date.toISOString(),
                                                                                            customerId  : id,
                                                                                            depotId     : depotId,
                                                                                            userId      : App.user().id,
                                                                                            contactType : contactType,
                                                                                            products    : items
                                                                                        };
                         
                                                                                        Storage.process({
                                                                                            type        : 'POST',
                                                                                            resource    : '!order',
                                                                                            data        : data,
                                                                                            description : 'Create new order for customer "' + customer.name + '".',
                                                                                            hint        : 'The order could not be created: ',
                                                                                            complete: function() {
                                                                                                window.location.hash = '!c/customer/' + id;
                                                                                            },
                                                                                            successMsg: 'The order was created.'
                                                                                        });
                
                
                                                                                    } else {
                                                                                       alert('This order exceeds the maximum vehicle capacity.');
                                                                                    }

                                                                               }
                                                                        });

    
                                                                    }
                                                                });
    
                                                            });
                            
                                                        });
                                                    });
                                                    break;
                                                case 'activity-service-complaint':
                                                    T.render('callcenter/complaint/service/create', function(t_) {
                        
                                                        var form = $('<form></form>').append(t_());
                                        
                                                        $('#form-service-complaint').html(form);
                                        
                                                        form.validate({
                                                            rules: {
                                                                "title"          : "required",
                                                                "description"    : "required"
                                                            },
                                                            submitHandler: function(form) {
                                        
                                                                var date = new Date();
     
                                                                var data = {
                                                                    datetime    : date.toISOString(),
                                                                    title       : form['title'].value,
                                                                    description : form['description'].value,
                                                                    userId      : App.user().id,
                                                                    contactType : contactType 
                                                                };
                                        
                                                                Storage.process({
                                                                    type        : 'POST',
                                                                    resource    : '!complaint/service/customer/' + id,
                                                                    data        : data,
                                                                    description : 'Register new service complaint.',
                                                                    hint        : 'The service complaint could not be registered: ',
                                                                    complete: function() {
                                                                        $('#form-service-complaint').empty();
                                                                    },
                                                                    successMsg: 'The service complaint was successfully registered.'
                                                                });
                                        
                                                            }
                                                        });
    
                                                    });
                                                    break;
                                                case 'activity-quality-complaint':
                                                    T.render('callcenter/complaint/quality/create', function(t_) {
                                                        T.render('callcenter/complaint/quality/product', function(t__) {
    
                                                            // Temporarily disable onRequestBegin hook
                                                            var callback = App.onRequestBegin;
                                                            App.onRequestBegin = function() {};
                            
                                                            Model.getProducts(function(products) {
                            
                                                                App.onRequestBegin = callback;
        
                                                                var form = $('<form></form>');
                                                                form.append(t_({product: products}));
                                                                $('#form-quality-complaint').html(form);
        
                                                                var rules = {
                                                                    "complaint-title"       : "required",
                                                                    "complaint-description" : "required"
                                                                };
        
                                                                var selected = [];
        
                                                                $('.complaint-add-product').click(function() {
        
                                                                    var productId = $('#complaint-product-select').val(),
                                                                        product = products[productId];
                                                                
                                                                    form.append(t__(product));
        
                                                                    $('#complaint-product-select option[value="' + productId + '"]').remove();
        
                                                                    $('input[name="prod-' + productId + '-title"]').rules('add', 'required');
                                                                    $('input[name="prod-' + productId + '-quantity"]').rules('add', 'required digits');
                                                                    $('input[name="prod-' + productId + '-batch-number"]').rules('add', 'required');
                                                                    $('input[name="prod-' + productId + '-production-date"]').rules('add', 'required date');
                                                                    $('input[name="prod-' + productId + '-production-time"]').rules('add', 'required time');
                                                                    $('input[name="prod-' + productId + '-expiry-date"]').rules('add', 'required date');
        
                                                                    selected.push(productId);
        
                                                                });
        
                                                                form.validate({
                                                                    rules: rules,
                                                                    submitHandler: function(form) {
        
                                                                        var products = [];
        
                                                                        _.each(selected, function(id) {
                                                                            var produced = form['prod-' + id + '-production-date'].value + ' ' + form['prod-' + id + '-production-time'].value;
                                                                            products.push({
                                                                                batchNumber : form['prod-' + id + '-batch-number'].value,
                                                                                productId   : id,
                                                                                quantity    : form['prod-' + id + '-quantity'].value,
                                                                                produced    : produced,
                                                                                expiryDate  : form['prod-' + id + '-expiry-date'].value,
                                                                                description : form['prod-' + id + '-comment'].value
                                                                            });
                                                                        });
        
                                                                        var date = new Date();
        
                                                                        var data = {
                                                                            datetime    : date.toISOString(),
                                                                            title       : form['complaint-title'].value,
                                                                            description : form['complaint-description'].value,
                                                                            products    : products,
                                                                            userId      : App.user().id,
                                                                            contactType : contactType
                                                                        };
                                                    
                                                                        Storage.process({
                                                                            type        : 'POST',
                                                                            resource    : '!complaint/quality/customer/' + id,
                                                                            data        : data,
                                                                            description : 'Register new quality complaint.',
                                                                            hint        : 'The quality complaint could not be registered: ',
                                                                            complete: function() {
                                                                                $('#form-quality-complaint').empty();
                                                                            },
                                                                            successMsg: 'The quality complaint was successfully registered.'
                                                                        });
         
                                                                    }
                                                                });
                          
                                                            });
                                                        });
                                                    });
                                                    break;
                                                case 'activity-add-contact':
    
                                                    var customerId = id;
    
                                                    T.render('callcenter/contact/create', function(t_) {
                        
                                                        // Temporarily disable onRequestBegin hook
                                                        var callback = App.onRequestBegin;
                                                        App.onRequestBegin = function() {};
                        
                                                        Storage.chain(Model.getContactTypes)
                                                               .chain(Model.getCustomer(customerId))
                                                               .using(function(contactTypes, customer) {
                                                
                                                            App.onRequestBegin = callback;
                        
                                                            customer.contactType = contactTypes;
                                            
                                                            var form = $('<form></form>').append(t_(customer));
                                                
                                                            $('#form-add-contact').html(form);
                                            
                                                            form.validate({
                                                                rules: {
                                                                    "kind"  : "required",
                                                                    "datum" : "required"
                                                                },
                                                                submitHandler: function(form) {
                                            
                                                                    var data = {
                                                                        kind        : form['kind'].value,
                                                                        datum       : form['datum'].value, 
                                                                        meta        : form['meta'].value
                                                                    };
                                            
                                                                    Storage.process({
                                                                        type        : 'POST',
                                                                        resource    : 'contact/customer/' + customerId,
                                                                        data        : data,
                                                                        description : 'Create a new customer contact for customer "' + customer.name + '".',
                                                                        purge       : ['customers', 'contacts-customer-' + customerId],
                                                                        hint        : 'The customer contact could not be created: ',
                                                                        complete: function() {
                                                                            $('#form-add-contact').empty();
                                                                        },
                                                                        successMsg: 'The customer contact information was added to customer "<a href="#customer/' + customerId + '">' + customer.name + '</a>".'
                                                                    });
                                                                }
                                                            });
                                                
                                                        });
                        
                                                    });
    
    
                                                    break;
                                                case 'activity-call-back':
                                                    T.render('callcenter/callback/create', function(t_) {
                        
                                                        var customerId = id;

                                                        var form = $('<form></form>').append(t_());

                                                        $('#form-call-back').html(form);

                                                        form.validate({
                                                            rules: {
                                                                'description' : 'required',
                                                                'date'        : 'required date',
                                                                'time'        : 'required time'
                                                            },
                                                            submitHandler: function(form) {

                                                                var data = {
                                                                    datetime    : form['date'].value + ' ' + form['time'].value,
                                                                    description : form['description'].value,
                                                                    kind        : 'scheduled-call-back',
                                                                    userId      : App.user().id,
                                                                    contactType : contactType,
                                                                    entityId    : customerId
                                                                };
                                            
                                                                Storage.process({
                                                                    type        : 'POST',
                                                                    resource    : 'activity/customer/' + customerId,
                                                                    data        : data,
                                                                    description : 'Schedule call back form customer "' + customer.name + '".',
                                                                    hint        : 'The call back could not be scheduled: ',
                                                                    complete: function() {
                                                                        $('#form-call-back').empty();
                                                                    },
                                                                    successMsg: 'The call back for customer "' + customer.name + '" has been scheduled.'
                                                                });

                                                            }
                                                        });
                        
                                                    });
                                                    break;
                                                case 'activity-none':

                                                    var customerId = id;

                                                    var date = new Date();

                                                    var data = {
                                                        datetime    : date.toISOString(),
                                                        description : 'No associated activity.',
                                                        kind        : 'no-activity',
                                                        userId      : App.user().id,
                                                        contactType : contactType,
                                                        entityId    : customerId
                                                    };
                                
                                                    Storage.process({
                                                        type        : 'POST',
                                                        resource    : 'activity/customer/' + customerId,
                                                        data        : data,
                                                        description : 'Register a customer call.',
                                                        hint        : 'The call could not be registered: ',
                                                        complete: function() {
                                                            window.location.hash = '!c/customer/' + customerId;
                                                        },
                                                        successMsg  : 'The customer call for "' + customer.name + '" has been registered.'
                                                    });

                                                    break;

                                                default:
                                                    break;
                                            }
                        
    
                                        });
    
    
                                    });
                                    break;
                                case 'select-activity':
                                    T.render('callcenter/activity/type', function(t_) {
                            
                                        $('#main').html(t(customer));
                                        $('#customer-activity-create').html(t_(customer));
    
    
                                    });
                                    break;
    
                                default:
                                    $('#main').html(t(customer));
                            }
                    
                        });
            
                    });

                });

            });

        });
    },
    callcenter_viewComplaint: function(id) {
        T.render('callcenter/complaint/view', function(t) {
            T.render('callcenter/complaint/products', function(t_) {
                Model.getComplaint(id, function(complaint) {

                    $('#main').html(t(complaint));

                    if ('quality' === complaint.kind) {
                        $('#main').append(t_(complaint));
                    }
 
                    $('button.resolve').click(function() {
    
                        var date = new Date();

                        Storage.process({
                            type        : 'PATCH',
                            resource    : '!complaint/resolve/' + id,
                            data        : {
                                datetime    : date.toISOString(),
                                customerId  : complaint.customerId,
                                userId      : App.user().id,
                                description : 'Complaint was resolved.'
                            },
                            description : 'Resolve complaint from customer "' + complaint.customer + '".',
                            purge       : 'complaints',
                            complete    : App.refresh
                        });
 
                    });

                });
            });
        });
    },
    callcenter_showOrdersForDate: function() {

        $('#main').html('cs: show orders for date');

    },
    callcenter_showOrders: function() {
        T.render('callcenter/order/index', function(t) {

            Model.getOrders(function(orders) {

                Model.getAreasForCurrentUser(function(areas) {

                    // Filter orders by area
                    var ordersInAreas = Model.filter(orders, function(item) {
                        return _.contains(areas, item.areaId);
                    });

                    $('#main').html(t({order: ordersInAreas}));

                });
            });

        });
    },
    callcenter_editOrder: function(id) {
        Model.getOrders(function(orders) {
            Storage.find(id, orders, function(order) {
 
                if ('placed' !== order.status) {
                    App.error({
                        responseJSON: { message: 'This order cannot be edited.' }
                    });
                    return;
                }

                $('#main').html('cs: edit order');

            });
        });
    },
    callcenter_deleteOrder: function(id) {

        $('#main').html('cs: delete order');

    },
    callcenter_viewOrder: function(id) {
        T.render('callcenter/order/view', function(t) {

            Model.getOrders(function(orders) {
                Storage.find(id, orders, function(order) {
                    Model.getProductsForOrder(id, function(products) { 

                        order.product = products;
                        $('#main').html(t(order));

                    });
                });
            });

        });
    },
    callcenter_showOrderActivityLog: function(orderId) {
        T.render('callcenter/order/log', function(t) {
            Model.getOrderActivity(orderId, function(activities) {

                _.each(activities, function(activity) {
                    activity.statusName = Model.readableOrderStatus(activity.status);
                });

                $('#main').html(t({activity: activities}));

            });
        });
    },
    callcenter_createOrder: function() {

        $('#main').html('cs: ..');

    },
    callcenter_showProducts: function(customerId) {
        T.render('callcenter/product/index', function(t) {

            Model.getCustomer(customerId, function(customer) {
                Model.getProducts(function(products) {

                    var priceCatId = customer.priceCatId;

                    var customerProducts = [];

                    for (key in products) {
                        var product = products[key];

                        if (product.category && product.category.hasOwnProperty(priceCatId)) {
                            product.customerPrice = product.category[priceCatId].price;
                            customerProducts.push(product);
                        }
                    }
   
                    $('#main').html(t({
                        product: customerProducts
                    }));
  
                });
            });

        });
    },
    callcenter_viewProduct: function(id) {
        T.render('callcenter/product/view', function(t) {
            Model.getProduct(id, function(product) {

                $('#main').html(t(product));

            });
        });

    },
    callcenter_showTasks: function() {
        T.render('callcenter/task/index', function(t) {
        
            Model.getCallcenterUserTasks(function(tasks) {

                $('#main').html(t({task: tasks}));

            });

        });
    },
    callcenter_showStockSummary: function() {
        T.render('callcenter/stock/summary', function(t) {
            Model.getDepotForCurrentUser(function(depotId) {

                Model.getStockForDepot(depotId, function(stock) {
                    $('#main').html(t({item: stock}));
                });

            });
        });
    },
    callcenter_showCalendar: function() {

        $('#main').html('cs: show calendar');

    },
    callcenter_viewPerformance: function() {
        T.render('callcenter/widget/performance', function(t) {

            var userId = App.user().id;

            Model.getTodaysTotalOrderValueForUser(userId, function(value) {
                Model.getTodaysCustomerCountForUser(userId, function(count) {
                    Model.getTodaysCommissionForUser(userId, function(sales) {

                        $('#main').html(t({
                            total      : value.total,
                            customers  : count.customers,
                            commission : sales.commission
                        }));

                    });
                });
            });

        });
    },
    depot_showQueuedDispatches: function() {
        T.render('depot/dispatch/index', function(t) {
            Model.getDepotForCurrentUser(function(depotId) {
                Model.getDispatchesWithStatus(['queued', 'loading', 'loaded'], function(allDispatches) {

                    var dispatches = Model.filter(allDispatches, function(item) {
                        return item.depotId == depotId;
                    });

                    _.each(dispatches, function(dispatch) {
                        dispatch.statusName = Model.readableOrderStatus(dispatch.status);
                    });
    
                    $('#main').html(t({dispatch: dispatches}));
    
                    $('.status').click(function() {
    
                        var newStatus  = $(this).data('status'),
                            dispatchId = $(this).data('id'),
                            date       = new Date()
    
                        var data = {
                            "status"   : newStatus,
                            "datetime" : date.toISOString() 
                        };
    
                        Storage.process({
                            type        : 'PATCH',
                            resource    : '!dispatch/status/' + dispatchId,
                            data        : data,
                            description : 'Update the status for dispatch #' + dispatchId + '.',
                            purge       : ['activity-dispatch-' + dispatchId, 'dispatches', 'order-activity-dispatch-' + dispatchId, 'orders'],
                            success: function() {
                                App.refresh();
                            },
                            successMsg: 'The status of <a href="#!d/dispatch/' + dispatchId + '">dispatch #' + dispatchId + '</a> was changed to "' + newStatus + '".'
                        });
    
                    });
    
                });
            });
        });
    },
    depot_showDispatched: function() {
        T.render('depot/dispatch/index', function(t) {
            Model.getDepotForCurrentUser(function(depotId) {
                Model.getDispatchesWithStatus('dispatched', function(allDispatches) {

                    var dispatches = Model.filter(allDispatches, function(item) {
                        return item.depotId == depotId;
                    });

                    _.each(dispatches, function(dispatch) {
                        dispatch.statusName = Model.readableOrderStatus(dispatch.status);
                    });
    
                    $('#main').html(t({dispatch: dispatches}));

                });
            });
        });
    },
    depot_showDispatchOrders: function(dispatchId) {

        $('#main').html('depot: show dispatch orders.');

    },
    depot_showOrderLog: function(orderId) {
        T.render('depot/order/log', function(t) {
            Model.getOrderActivity(orderId, function(activities) {

                _.each(activities, function(activity) {
                    activity.statusName = Model.readableOrderStatus(activity.status);
                });

                $('#main').html(t({activity: activities}));

            });
        });
    },
    depot_viewDispatch: function(id) {

        Model.getDispatch(id, function(dispatch) {
            T.render('depot/dispatch/details', function(t_) {

                var div = $('<div></div>');
                div.append(t_(dispatch));

                if (_.contains(['queued', 'loading', 'loaded'], dispatch.status)) {
                    T.render('depot/dispatch/product-view', function(t) {
    
                        Model.getProductsForDispatch(id, function(products) {
    
                            dispatch.product = products;
    
                            div.append(t(dispatch));
                            $('#main').html(div);

                        });
    
                    });
                } else {
                    T.render('depot/dispatch/order-view', function(t) {

                        Model.getOrdersForDispatch(id, function(orders) {

                            var orderActivity = {};
                            _.each(dispatch.orderActivity, function(activity) {
                                if (orderActivity.hasOwnProperty(activity.orderId)) {
                                    orderActivity[activity.orderId][activity.status] = activity;
                                } else {
                                    var o = {};
                                    o[activity.status] = activity;
                                    orderActivity[activity.orderId] = o;
                                }
                            });

                            dispatch.order = orders;

                            var ids = [];
                            _.each(orders, function(order) {
                                ids.push(order.orderId);
                                order.timeDelivered = '-';
                                order.timeConfirmed = '-'; 
                                if (orderActivity.hasOwnProperty(order.orderId)) {
                                    var activities = orderActivity[order.orderId];
                                    if (activities['delivered']) {
                                        order.timeDelivered = activities['delivered'].created;
                                    }
                                    if (activities['confirmed']) {
                                        order.timeConfirmed = activities['confirmed'].created; 
                                    }
                                }
                            });

                            div.append(t(dispatch));
                            $('#main').html(div);
    
                        });

                    });
                }
            });

        });
    },
    depot_showDispatchLog: function(dispatchId) {
        T.render('depot/dispatch/log', function(t) {
            Model.getDispatchActivity(dispatchId, function(activities) {

                _.each(activities, function(activity) {
                    activity.statusName = Model.readableOrderStatus(activity.status);
                });

                $('#main').html(t({activity: activities}));

            });
        });
    },
    depot_viewProduct: function(id) {
        T.render('depot/product/view', function(t) {
            Model.getProduct(id, function(product) {

                $('#main').html(t(product));

            });
        });
    },
    depot_viewCustomer: function(id) {

        $('#main').html('depot: show customer');

    },
    depot_showVehicles: function() {
        T.render('depot/vehicle/index', function(t) {
            Model.getVehicles(function(vehicles) {
                Model.getDepotForCurrentUser(function(depotId) {

                    // Filter vehicles by availability and depot
                    var availVehicles = Model.filter(vehicles, function(item) {
                        return item.depotId == depotId && item.isAvailable;
                    });

                    $('#main').html(t({vehicle: availVehicles}));

                });
            });
        });
    },
    depot_viewVehicle: function(id) {
        T.render('depot/vehicle/view', function(t) {
            Model.getVehicle(id, function(vehicle) {

                Model.getMaintenanceActivityForVehicle(id, function(maintenance) {
                    Model.getFuelActivityForVehicle(id, function(fuel) {

                        vehicle.maintenanceActivity = maintenance;
                        vehicle.fuelActivity = fuel;

                        $('#main').html(t(vehicle));

                    });
                });

            });
        });
    },
    depot_addFuelToVehicle: function(vehicleId) {
        T.render('depot/fuel/add', function(t) {
            Model.getVehicle(vehicleId, function(vehicle) {

                var form = $('<form></form>').append(t(vehicle));

                $('#main').html(form);

                $('input[name="meter-reading"]').val(vehicle.meterReading);

                form.validate({
                    rules: {
                        "meter-reading": {
                            required : true,
                            number   : true,
                            min      : vehicle.meterReading
                        },
                        "amount": {
                            required : true,
                            number   : true,
                        }
                    },
                    submitHandler: function(form) {

                        var data = {
                            meterReading : form['meter-reading'].value,
                            amount       : form['amount'].value
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : 'fuel-activity/vehicle/' + vehicleId,
                            data        : data,
                            description : 'Create a fuel activity log entry for vehicle "' + vehicle.regNo + '".',
                            purge       : ['fuel-data-' + vehicleId, 'meter-reading-' + vehicleId],
                            hint        : 'The fuel activity log entry could not be created: ',
                            complete: function() {
                                window.location.hash = '!d/vehicle/' + vehicleId;
                            },
                            successMsg: 'The fuel log entry for vehicle "' + vehicle.regNo + '" was successfully created.'
                        });

                    }
                });
                
            });
        });
    },
    depot_logMaintenanceActivityForVehicle: function(vehicleId) {
        T.render('depot/maintenance/register', function(t) {

            Storage.chain(Model.getMaintenanceTypes)
                   .chain(Model.getVehicle(vehicleId))
                   .using(function(activityTypes, vehicle) {

                if (_.isEmpty(activityTypes)) {
                    App.error({
                        responseJSON: { message: 'No maintenance activity types found.' }
                    });
                } else {
                    vehicle.activityType = activityTypes;
                    $('#main').html(t(vehicle));

                    var form = $('<form></form>').append(t(vehicle));
    
                    $('#main').html(form);

                    $('input[name="meter-reading"]').val(vehicle.meterReading);
    
                    form.validate({
                        rules: {
                            "meter-reading" : {
                                required : true,
                                number   : true,
                                min      : vehicle.meterReading
                            },
                            "description"   : "required",
                            "start-time"    : "required datetime"
                        },
                        submitHandler: function(form) {
    
                            var data = {
                                meterReading : form['meter-reading'].value,
                                description  : form['description'].value,
                                startTime    : form['start-time'].value,
                                activity     : form['type'].value,
                                vehicleId    : vehicleId
                            };
    
                            Storage.process({
                                type        : 'POST',
                                resource    : '!maintenance/vehicle/' + vehicleId,
                                data        : data,
                                description : 'Create a maintenance activity entry for vehicle "' + vehicle.regNo + '".',
                                purge       : ['vehicles', 'maintenance-data-' + vehicleId, 'meter-reading-' + vehicleId],
                                hint        : 'The maintenance activity log entry could not be created: ',
                                complete: function() {
                                    window.location.hash = '!d/vehicle/' + vehicleId;
                                },
                                successMsg: 'The maintenance activity log entry for vehicle "' + vehicle.regNo + '" was successfully created.'
                            });
    
                        }
                    });

                }

            });

        });
    },
    depot_completeMaintenanceActivityForVehicle: function(vehicleId) {
        T.render('depot/maintenance/complete', function(t) {

            Model.getVehicle(vehicleId, function(vehicle) {

                var form = $('<form></form>').append(t(vehicle));

                $('#main').html(form);

                form.validate({
                    rules: {
                        "end-time" : {
                            required       : true,
                            datetime       : true,
                            moreRecentThan : vehicle.maintenanceStartTime
                        }
                    },
                    submitHandler: function(form) {

                        var data = {
                            endTime: form['end-time'].value
                        };

                        Storage.process({
                            type        : 'PATCH',
                            resource    : '!maintenance/complete/vehicle/' + vehicleId,
                            data        : data,
                            description : 'Complete maintenance activity for vehicle "' + vehicle.regNo + '".',
                            purge       : ['vehicles', 'maintenance-data-' + vehicleId],
                            hint        : 'The maintenance activity could not be completed: ',
                            complete: function() {
                                window.location.hash = '!d/vehicle/' + vehicleId;
                            },
                            successMsg: 'The maintenance activity for "' + vehicle.regNo + '" was completed.'
                        });

                    }
                });

            });

        });
    },
    depot_showDrivers: function() {
        T.render('depot/driver/index', function(t) {
            Model.getDepotForCurrentUser(function(depotId) {
                Model.getUsersByRole('driver', function(drivers) {

                    var depotDrivers = Model.filter(drivers, function(item) {
                        return item.depotId == depotId;
                    });

                    Model.getVehicles(function(vehicles) {

                        var vehiclesByDriver = Storage.toMap(vehicles, 'driverId');


                        _.each(depotDrivers, function(driver) {
                            if (vehiclesByDriver.hasOwnProperty(driver.id)) {
                                driver.vehicle = vehiclesByDriver[driver.id];
                            } else {
                                driver.vehicle = null;
                            }
                        });
    
                        $('#main').html(t({driver: depotDrivers}));

                    });
                });
            });
        });
    },
    depot_assignDriverToVehicle: function(vehicleId) {
        T.render('depot/vehicle/driver', function(t) {

            Storage.chain(Model.getVehicle(vehicleId))
                   .chain(Model.getUsersByRole('driver'))
                   .using(function(vehicle, drivers) {

                var depotDrivers = _.filter(drivers, function(driver) {
                    return driver.depotId === vehicle.depotId;
                });

                var form = $('<form></form>').append(t({
                    driver  : depotDrivers,
                    vehicle : vehicle
                }));
     
                $('#main').html(form);

                if (vehicle.driverId) {
                    $('select[name="driver"]').val(vehicle.driverId);
                }
    
                form.validate({
                    submitHandler: function(form) {

                        if (form['driver'].value) {

                            var data = {
                                driverId  : form['driver'].value,
                                vehicleId : vehicleId
                            };

                            Storage.process({
                                type        : 'PATCH',
                                resource    : '!vehicle/driver',
                                data        : data,
                                description : 'Assign a driver to vehicle ' + vehicle.regNo + '.',
                                purge       : ['vehicles', 'users'],
                                hint        : 'The driver could not be assigned to the vehicle: ', 
                                complete: function() {
                                    window.location.hash = '!d/vehicles';
                                }
                            });

                        } else {

                            Storage.process({
                                type        : 'PATCH',
                                resource    : 'vehicle/driver/null',
                                data        : { vehicleId: vehicleId },
                                description : 'Remove driver assignment for vehicle ' + vehicle.regNo + '.',
                                purge       : ['vehicles', 'users'],
                                hint        : 'The driver assignment could not be removed: ', 
                                complete: function() {
                                    window.location.hash = '!d/vehicles';
                                }
                            });

                        }
                    }

                });
            });
        });
    },
    depot_showStockSummary: function() {
        T.render('depot/stock/summary', function(t) {
            Model.getDepotForCurrentUser(function(depotId) {

                Model.getStockForDepot(depotId, function(stock) {
                    $('#main').html(t({item: stock}));
                });

            });
        });
    },
    depot_addStock: function() {
        T.render('depot/stock/add', function(t) {
            Model.getDepotForCurrentUser(function(depotId) {
            
                Storage.chain(Model.getProducts)
                       .chain(Model.getDepot(depotId))
                       .using(function(products, depot) {

                    var form = $('<form></form>').append(t({
                        product : products,
                        depot   : depot
                    }));

                    $('#main').html(form);

                    form.validate({
                        rules: {
                            "quantity" : "required number"
                        },
                        submitHandler: function(form) {
        
                            var productId = $('select[name="product"]').val();

                            Storage.find(productId, products, function(product) {

                                var data = {
                                    quantity  : form['quantity'].value,
                                    productId : productId,
                                    type      : 'incoming'
                                };
            
                                Storage.process({
                                    type        : 'PATCH',
                                    resource    : '!stock/add/depot/' + depotId,
                                    data        : data,
                                    description : 'Add incoming stock for product "' + product.name + '" in "' + depot.name + '".',
                                    purge       : ['stock-' + depotId, 'stock-activity'],
                                    hint        : 'Product stock could not be added: ',
                                    complete: function() {
                                        window.location.hash = '!d/sidebar/stock-summary';
                                    },
                                    successMsg: 'Product stock was successfully added.'
                                });

                            });
        
                        }

                    });

                });

            });

        });
    },
    depot_makeStockAdjustment: function() {
        T.render('depot/stock/adjust', function(t) {
            Model.getDepotForCurrentUser(function(depotId) {

                Storage.chain(Model.getProducts)
                       .chain(Model.getDepot(depotId))
                       .chain(Model.getStockForDepot(depotId))
                       .using(function(products, depot, stock) {

                    var form = $('<form></form>').append(t({
                        product : products,
                        depot   : depot
                    }));
     
                    $('#main').html(form);

                    var productStock = Storage.toMap(stock, 'productId');

                    _.each(products, function(product) {

                        var qty = 0;
                        if (productStock.hasOwnProperty(product.id)) {
                            qty = productStock[product.id].actual;
                        }
                        $('input[name="product-' + product.id + '"]').val(qty);

                    });

                    form.validate({
                        submitHandler: function(form) {

                            // Identify all fields for which the stock amount has been 
                            // modified by the user.

                            var pos = [];
                            var neg = [];

                            _.each(products, function(product) {
                                var qty = 0;
                                if (productStock.hasOwnProperty(product.id)) {
                                    qty = productStock[product.id].actual;
                                }
                                var qty_ = $('input[name="product-' + product.id + '"]').val();

                                if (qty < qty_) {

                                    pos.push({
                                        quantity  : (qty_ - qty),
                                        productId : product.id,
                                        type      : 'adjustment_pos'
                                    });

                                } else if (qty > qty_) {

                                    neg.push({
                                        quantity  : (qty - qty_),
                                        productId : product.id,
                                        type      : 'adjustment_neg'
                                    });

                                }

                            });

                            var next = function() {
                                if (neg.length) {

                                    Storage.process({
                                        type        : 'PATCH',
                                        resource    : '!stock/remove/depot/' + depotId,
                                        data        : neg,
                                        description : 'Product stock adjustment on depot "' + depot.name + '".',
                                        purge       : ['stock-' + depotId, 'stock-activity'],
                                        hint        : 'Product stock adjustment failed: ',
                                        complete: function() {
                                            window.location.hash = '!d/sidebar/stock-summary';
                                        },
                                        successMsg: 'Product stock was successfully adjusted.'
                                    });

                                } else {
                                    App.notify('Product stock was successfully adjusted.');
                                    window.location.hash = '!d/sidebar/stock-summary';
                                }
                            };

                            if (pos.length) {

                                Storage.process({
                                    type        : 'PATCH',
                                    resource    : '!stock/add/depot/' + depotId,
                                    data        : pos,
                                    description : 'Product stock adjustment on depot "' + depot.name + '".',
                                    purge       : ['stock-' + depotId, 'stock-activity'],
                                    hint        : 'Product stock adjustment failed: ',
                                    success     : next
                                });

                            } else {
                                next();
                            }

                        }
                    });

                });

            });
        });
    },
    depot_reportStockDamage: function() {
        T.render('depot/stock/report', function(t) {
            Model.getDepotForCurrentUser(function(depotId) {

                Storage.chain(Model.getProducts)
                       .chain(Model.getDepot(depotId))
                       .chain(Model.getDamageTypes)
                       .using(function(products, depot, types) {

                    var form = $('<form></form>').append(t({
                        product : products,
                        depot   : depot,
                        type    : types
                    }));

                    $('#main').html(form);

                    form.validate({
                        rules: {
                            "quantity" : "required number"
                        },
                        submitHandler: function(form) {
        
                            var productId = $('select[name="product"]').val(),
                                typeId = $('select[name="type"]').val();

                            Storage.find(productId, products, function(product) {

                                var data = {
                                    quantity    : form['quantity'].value,
                                    productId   : productId,
                                    type        : 'damage',
                                    damageType  : types[typeId].name,
                                    description : $('textarea[name="comment"]').val(),
                                };

                                Storage.process({
                                    type        : 'PATCH',
                                    resource    : '!stock/report-damage/depot/' + depotId,
                                    data        : data,
                                    description : 'Report damaged stock for product "' + product.name + '".',
                                    purge       : ['stock-' + depotId, 'stock-activity'],
                                    hint        : 'Product stock damage could not be reported: ',
                                    complete: function() {
                                        window.location.hash = '!d/sidebar/stock-summary';
                                    },
                                    successMsg: 'Damaged product stock was reported.'
                                });
        
                            });

                        }
                    });
        
                });

            });
        });
    },
    depot_showStockActivity: function() {
        T.render('depot/stock/activity', function(t) {
            Model.getDepotForCurrentUser(function(depotId) {

                Model.getStockActivityForDepot(depotId, function(activity) {
                
                    _.each(activity, function(act) {
                        act.type = Model.readableStockActType(act.activityType);
                    });
    
                    $('#main').html(t({
                        activity: activity
                    }));
    
                });

            });
        });
    },
    depot_viewStockDamageReport: function(activityId) {
        T.render('depot/stock/damage-report', function(t) {

            Model.getStockActivity(function(activity) {
                Storage.find(activityId, activity, function(res) {
                    $('#main').html(t(res));
                });
            });

        });
    },

    depot_load: function(vehicleId) {
        T.render('depot/dispatch/load', function(t) {
            T.render('depot/dispatch/orders', function(t_) {
                Model.getVehicle(vehicleId, function(vehicle) {
                    if (vehicle.depotId) {
                        Model.getAreasForDepot(vehicle.depotId, function(areas) {
            
                            $('#main').html(t({
                                area: areas
                            }));

                            var areaIds = [];
                            _.each(areas, function(area) {
                                areaIds.push(area.id);
                            });

                            var loadArea = function(area) {

                                // Temporarily disable onRequestBegin hook
                                var callback = App.onRequestBegin;
                                App.onRequestBegin = function() {};

                                $('#dispatch-orders').html('Loading');

                                Model.getOrdersWithStatus('placed', function(orders) {

                                    var areaOrders;
                                    if ('all' == area) {
                                        areaOrders = _.filter(orders, function(order) {
                                            return _.contains(areaIds, order.areaId);
                                        });
                                    } else {
                                        areaOrders = _.filter(orders, function(order) {
                                            return order.areaId == area;
                                        });
                                    }
     
                                    $('#dispatch-orders').html(t_({
                                        order: areaOrders 
                                    }));

                                    App.onRequestBegin = callback;

                                    var getCheckedOrders = function() {
                                        var ids = [];
                                        $('.load-order-item:checked').each(function() {
                                            ids.push($(this).data('id'));
                                        });
                                        return ids;
                                    };

                                    $('.load-order-item').click(function() {

                                        var ids = getCheckedOrders();
                                        var box = $(this);

                                        if (ids.length) {

                                            //Storage.load('order-load/vehicle/' + , 'time-average-' + customerId, function() {
                                            //});

                                            Storage.request({
                                                type: 'POST',
                                                resource: 'order-load/vehicle/' + vehicleId,
                                                data: {
                                                    orderIds: ids
                                                },
                                                success: function(resp) {
                                                    if (resp.load > 1) {
                                                        alert('Vehicle overloaded!');
                                                        box.prop('checked', false);
                                                    } else {
                                                        var str = (resp.load*100) + '%';
                                                        $('#dispatch-load-value').html(str);
                                                    }
                                                }
                                            });

                                        }

                                    });

                                    $('#dispatch-create').click(function() {

                                        var orderIds = [];
                                        _.each(getCheckedOrders(), function(id) {
                                            orderIds.push({orderId: id});
                                        });
                                        
                                        if (orderIds.length) {

                                            var date = new Date();
        
                                            var data = {
                                                vehicleId : vehicleId,
                                                datetime  : date.toISOString(),
                                                orders    : orderIds
                                            };
    
                                            Storage.process({
                                                type        : 'POST',
                                                resource    : '!dispatch',
                                                data        : data,
                                                description : 'Dispatch orders.',
                                                success: function() {
                                                    App.refresh();
                                                },
                                                successMsg: 'The dispatch was successfully created.'
                                            });

                                        }

                                    });

                                });
                            };
    
                            $('#dispatch-load').click(function() {
                                loadArea($('#main select').val());
                                $('#dispatch-load-value').empty();
                            });

                            //loadArea('all');
        
                        });
                    } else {
                        App.error({
                            responseJSON: { message: 'This vehicle has not been assigned to any depot.' }
                        });
                    }
                });
            });
        });
    },

    queueing_showDispatches: function() {
        T.render('queueing/dispatch/index', function(t) {
            Model.getDispatchesWithStatus(['queued', 'loading', 'loaded', 'dispatched'], function(dispatches) {

                _.each(dispatches, function(dispatch) {
                    dispatch.statusName = Model.readableOrderStatus(dispatch.status);
                });
    
                $('#main').html(t({dispatch: dispatches}));
    
            });
        });
    },
    queueing_showDispatchHistory: function() {
        T.render('queueing/dispatch/index', function(t) {
            Model.getDispatchesWithStatus('confirmed', function(dispatches) {

                _.each(dispatches, function(dispatch) {
                    dispatch.statusName = Model.readableOrderStatus(dispatch.status);
                });
    
                $('#main').html(t({dispatch: dispatches}));
    
            });
        });
    },
    queueing_showVehicles: function() {
        T.render('queueing/vehicle/index', function(t) {
            Model.getVehicles(function(vehicles) {

                var availableVehicles = Model.filter(vehicles, function(item) {
                    return item.isAvailable;
                });
    
                $('#main').html(t({vehicle: availableVehicles}));
    
            });
        });
    },
    queueing_viewVehicle: function(id) {
        T.render('queueing/vehicle/view', function(t) {
            Model.getVehicle(id, function(vehicle) {

                Model.getMaintenanceActivityForVehicle(id, function(maintenance) {
                    Model.getFuelActivityForVehicle(id, function(fuel) {

                        vehicle.maintenanceActivity = maintenance;
                        vehicle.fuelActivity = fuel;

                        $('#main').html(t(vehicle));

                    });
                });

            });
        });
    },
    queueing_viewDispatch: function(id) {
        Model.getDispatch(id, function(dispatch) {
            T.render('queueing/dispatch/details', function(t_) {
                T.render('queueing/dispatch/order-view', function(t) {

                    var div = $('<div></div>');
                    div.append(t_(dispatch));

                    Model.getOrdersForDispatch(id, function(orders) {

                        var orderActivity = {};
                        _.each(dispatch.orderActivity, function(activity) {
                            if (orderActivity.hasOwnProperty(activity.orderId)) {
                                orderActivity[activity.orderId][activity.status] = activity;
                            } else {
                                var o = {};
                                o[activity.status] = activity;
                                orderActivity[activity.orderId] = o;
                            }
                        });

                        dispatch.order = orders;

                        var ids = [];
                        _.each(orders, function(order) {
                            ids.push(order.orderId);
                            order.timeDelivered = '-';
                            order.timeConfirmed = '-'; 
                            if (orderActivity.hasOwnProperty(order.orderId)) {
                                var activities = orderActivity[order.orderId];
                                if (activities['delivered']) {
                                    order.timeDelivered = activities['delivered'].created;
                                }
                                if (activities['confirmed']) {
                                    order.timeConfirmed = activities['confirmed'].created; 
                                }
                            }
                        });

                        div.append(t(dispatch));
                        $('#main').html(div);

                    });

                });

            });

        });
    },
    queueing_load: function(vehicleId) {
        T.render('queueing/dispatch/load', function(t) {
            T.render('queueing/dispatch/orders', function(t_) {
                Model.getVehicle(vehicleId, function(vehicle) {
                    if (vehicle.depotId) {
                        Model.getAreasForDepot(vehicle.depotId, function(areas) {
            
                            $('#main').html(t({
                                area: areas
                            }));

                            var areaIds = [];
                            _.each(areas, function(area) {
                                areaIds.push(area.id);
                            });

                            var loadArea = function(area) {

                                // Temporarily disable onRequestBegin hook
                                var callback = App.onRequestBegin;
                                App.onRequestBegin = function() {};

                                $('#dispatch-orders').html('Loading');

                                Model.getOrdersWithStatus('placed', function(orders) {

                                    var areaOrders;
                                    if ('all' == area) {
                                        areaOrders = _.filter(orders, function(order) {
                                            return _.contains(areaIds, order.areaId);
                                        });
                                    } else {
                                        areaOrders = _.filter(orders, function(order) {
                                            return order.areaId == area;
                                        });
                                    }
     
                                    $('#dispatch-orders').html(t_({
                                        order: areaOrders 
                                    }));

                                    App.onRequestBegin = callback;

                                    var getCheckedOrders = function() {
                                        var ids = [];
                                        $('.load-order-item:checked').each(function() {
                                            ids.push($(this).data('id'));
                                        });
                                        return ids;
                                    };

                                    $('.load-order-item').click(function() {

                                        var ids = getCheckedOrders();
                                        var box = $(this);

                                        if (ids.length) {

                                            Storage.request({
                                                type: 'POST',
                                                resource: 'order-load/vehicle/' + vehicleId,
                                                data: {
                                                    orderIds: ids
                                                },
                                                success: function(resp) {
                                                    if (resp.load > 1) {
                                                        alert('Vehicle overloaded!');
                                                        box.prop('checked', false);
                                                    } else {
                                                        var str = (resp.load*100) + '%';
                                                        $('#dispatch-load-value').html(str);
                                                    }
                                                }
                                            });

                                        }

                                    });

                                    $('#dispatch-create').click(function() {

                                        var orderIds = [];
                                        _.each(getCheckedOrders(), function(id) {
                                            orderIds.push({orderId: id});
                                        });
                                        
                                        if (orderIds.length) {

                                            var date = new Date();
        
                                            var data = {
                                                vehicleId : vehicleId,
                                                datetime  : date.toISOString(),
                                                orders    : orderIds
                                            };
    
                                            Storage.process({
                                                type        : 'POST',
                                                resource    : '!dispatch',
                                                data        : data,
                                                description : 'Dispatch orders.',
                                                success: function() {
                                                    App.refresh();
                                                },
                                                successMsg: 'The dispatch was successfully created.'
                                            });

                                        }

                                    });

                                });
                            };
    
                            $('#dispatch-load').click(function() {
                                loadArea($('#main select').val());
                                $('#dispatch-load-value').empty();
                            });

                            //loadArea('all');
        
                        });
                    } else {
                        App.error({
                            responseJSON: { message: 'This vehicle has not been assigned to any depot.' }
                        });
                    }
                });
            });
        });
    },
    callcenter_editCustomer: function(id) {

        $('#main').html('cs: edit customer');

    },
    callcenter_createCustomerContact: function(customerId) {
        T.render('callcenter/contact/create', function(t) {

            Storage.chain(Model.getContactTypes)
                   .chain(Model.getCustomer(customerId))
                   .using(function(contactTypes, customer) {
    
                customer.contactType = contactTypes;

                var form = $('<form></form>').append(t(customer));
    
                $('#main').html(form);

                form.validate({
                    rules: {
                        "kind"  : "required",
                        "datum" : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            kind        : form['kind'].value,
                            datum       : form['datum'].value, 
                            meta        : form['meta'].value
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : 'contact/customer/' + customerId,
                            data        : data,
                            description : 'Create a new customer contact for customer "' + customer.name + '".',
                            purge       : ['customers', 'contacts-customer-' + customerId],
                            hint        : 'The customer contact could not be created: ',
                            complete: function() {
                                window.location.hash = '#!c/customer/' + customerId + '/tab/contacts';
                            },
                            successMsg: 'The customer contact information was added to customer "<a href="#customer/' + customerId + '">' + customer.name + '</a>".'
                        });
                    }
                });
    
            });

        });
    },
    callcenter_editCustomerContact: function(id) {
        T.render('callcenter/contact/edit', function(t) {

            Storage.chain(Model.getContactTypes)
                   .chain(Model.getContact(id))
                   .using(function(contactTypes, contact) {

                var customerId = contact.customerId;

                contact.contactType = contactTypes;

                var form = $('<form></form>').append(t(contact));
                $('#main').html(form);

                form.validate({
                    rules: {
                        "kind"  : "required",
                        "body"  : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            kind       : form['kind'].value,
                            datum      : form['datum'].value, 
                            meta       : form['meta'].value
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : 'contact/' + id + '/customer/' + customerId,
                            data        : data,
                            description : 'Edit customer contact for customer "' + contact.customerName + '".',
                            purge       : ['contact-' + id, 'contacts-customer-' + customerId],
                            hint        : 'The customer contact could not be updated: ',
                            complete: function() {
                                window.location.hash = '#!c/customer/' + customerId + '/tab/contacts';
                            },
                            successMsg: 'The customer contact information was updated for customer "<a href="#customer/' + customerId + '">' + contact.customerName + '</a>".'
                        });

                    }
                });

            });

        });
    },
    callcenter_deleteCustomerContact: function(id) {
        T.render('callcenter/contact/delete', function(t) {
            Model.getContact(id, function(contact) {

                var form = $('<form></form>').append(t(contact));
                $('#main').html(form);

                $('button.confirm').click(function() {
                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'contact/' + id + '/customer/' + contact.customerId,
                        data        : '',
                        description : 'Delete contact for customer "' + contact.customerName + '".',
                        purge       : ['customers', 'contacts-customer-' + contact.customerId],
                        hint        : 'Cannot delete contact: ',
                        complete: function() {
                            window.location.hash = '#!c/customer/' + contact.customerId + '/tab/contacts';
                        },
                        successMsg: 'The customer contact information was deleted.'
                    });
                });

            });
        });
    },

    queueing_viewProduct: function(id) {

        $('#main').html('queueing: view product');

    }
});
