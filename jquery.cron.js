/**
 * 
 * Lib Name : CronExpress
 * Licence  : @ducen
 * Etc :
 * 
 * 
 * 
 */

(function($){


                /**
                 * These object contain the Default configuration for all components 
                 * You can set and get this global options using :
                 * $fn.CronExpress.SetDefaultOptions (for set)
                 * $fn.CronExpress.GetDefaultOptions (for get)
                 **/
                function GenerateComponentsOptions (param){
                
                /**
                  * This is below property contain the common configuration for every params.
                  *  
                  */
                    
                        this.Every      = new StaticOptions(param),
                        this.Increments = new StaticOptions(param),
                        this.Specific   = new StaticOptions(param) ,
                        this.Between    = new StaticOptions(param)
                

                    if(param == "Days"){
                            
                            // * * * L * ? *
                            this.LastDayOfMonth            = new StaticOptions(param),
                            
                            // * * * LW * ? *
                            this.LastWeekDayOfTheMonth     = new StaticOptions(param),

                            // * * * 1L * ? *
                            this.SpecificLastDayOfMonth    = new StaticOptions(param),
                            
                            // * * * L-8 * ? *
                            this.DaysBeforeEndOfTheMonth   = new StaticOptions(param),

                            // * * * 26W * ? *
                            this.NearestWeekDayOfTheMonth  = new StaticOptions(param),

                            // * * * ? * 1#2 *
                            this.NthDayOfTheMonth          = new StaticOptions(param)
                      }
                    }
    

                function StaticOptions (param){
                    this.Visibility         =  true,
                    this.ElementSelectors   =  {UniqueId:"Cron"+param}; 
                    this.LabelSelectors     =  {};
                    this.WrapperSelectors   =  {} ;
                    this.labelText          =  "Every"
                }

                var DefaultOptions = {
                        CronBuilder : {
                                Second          : "*",
                                Minute          : "*",
                                Hour            : "*",
                                DaysOfMonth     : "*",
                                Month           : "*",
                                DaysOfWeek      : "*",
                                Year            : "*"

                            },
                            CronComponents : {
                                Seconds     : new GenerateComponentsOptions("Seconds"),
                                Minutes     : new GenerateComponentsOptions("Minutes"),
                                Hours       : new GenerateComponentsOptions("Hours"),
                                DaysOfMonth : new GenerateComponentsOptions("DaysOfMonth"),
                                Month       : new GenerateComponentsOptions("Month"),
                                Year        : new GenerateComponentsOptions("Year"),
                            }
                        }


                    //console.log(defaultOptions);

                    /**
                     * Extend the jquery 
                     * param1 -> Default options
                     * 
                     */
                $.fn.CronExpress = function(Options){

                    var Settings = {
                        Seconds         : $.extend({},DefaultOptions.CronComponents.Seconds     , Options),
                        Minutes         : $.extend({},DefaultOptions.CronComponents.Minutes     , Options),
                        Hours           : $.extend({},DefaultOptions.CronComponents.Hours       , Options),
                        DaysOfMonth     : $.extend({},DefaultOptions.CronComponents.DaysOfMonth , Options),
                        Month           : $.extend({},DefaultOptions.CronComponents.Month       , Options),
                        DaysOfWeek      : $.extend({},DefaultOptions.CronComponents.DaysOfWeek  , Options),
                        Year            : $.extend({},DefaultOptions.CronComponents.Year        , Options)
                    };

                    //Build Components 
                   buildComponents(this,Settings)
                   
                   console.log(Settings);
                            
                }
                
                $.fn.CronExpress.loadCron = function(CronExpression){
                    //Validate CronExpression

                    //After validate load to the View
                    loadCronView()
                }
       
                /**
                 * Private functions for internal use : 
                 * ex : build the view ()
                 * ex : load the expression to edit()
                 **/
                
                function buildComponents(element,Settings){
                
                }

                function buildView(element,widgetType,data){
                  

                }

}(jQuery));
