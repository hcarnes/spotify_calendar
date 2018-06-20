class EventsController < ApplicationController

  def index
    date = Date.parse(params[:date])
    events = Event.where(%Q[
      EXTRACT(month FROM events.start) = ? AND EXTRACT(year FROM events.start) = ?
    ], date.month, date.year)
    render json: events
  end

  def create
    event = Event.new(params.require(:event).permit(:description, :start, :end))
    if event.save
      render json: event
    else
      head :unprocessable_entity
    end
  end

  def update
    event = Event.find(params[:id])
    if event.update(params.require(:event).permit(:description, :start, :end))
      render json: event
    else
      head :unprocessable_entity
    end
  end

  def destroy
    event = Event.find(params[:id])
    if event.destroy
      render json: event
    else
      head :unprocessable_entity
    end
  end
end
