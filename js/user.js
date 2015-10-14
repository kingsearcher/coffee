//主页
var index={
	len:0,
	i:0,
	_init:function()
	{
		this.len=$(".nav li").length;
		for(var i=0;i<this.len;i++)
		{
			var w=$(".nav li").eq(i).css("width").split("px")[0]*1+50;
			$(".nav li").eq(i).css("margin-left","-"+w+"px");
		}	
		$(".company,.copy,.sign").hide();
		this._nav(); 
	},
	_nav:function()
		{
			if(this.i<=this.len)
			{
				$(".nav li").eq(this.i).animate({
					"marginLeft":0
				},250,function(){
					index.i++;
					index._nav();
					if(index.i>=index.len)
					{
						$(".company,.copy,.sign").fadeIn(300);
						this.i=0;
					}
				});
			}
		}
}
