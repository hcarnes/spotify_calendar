class EventsController < ApplicationController

  def create
    event = Event.new(params.require(:event).permit(:description, :start, :end))
    if event.save
      render json: event
    else
      head :unprocessable_entity
    end
  end
end
